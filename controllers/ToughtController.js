const Tought = require('../models/Tought')
const User = require('../models/User')
const capitalized = require('../helpers/capitalized').capitalized
const { Op } = require('sequelize')
const sequelize = require('../db/conn')

class ToughtController {
  static async showToughts(req, res) {
    let search = ''

    if (req.query.search) {
      search = req.query.search
    }

    let sort = 'DESC'

    if (req.query.sort === 'old') {
      sort = 'ASC'
    } else {
      sort = 'DESC'
    }

    const toughtsData = await Tought.findAll({
      include: User,
      where: {
        title: { [Op.like]: `%${search}%` },
      },
      order: [['createdAt', sort]],
    })
    const toughts = toughtsData.map(result => result.get({ plain: true }))

    let toughtsLength = toughts.length
    if (!toughtsLength) {
      toughtsLength = false
    }

    const datas = toughts.map(el => el.createdAt)
    res.render('home', { toughts, search, toughtsLength })
  }

  static async dashboard(req, res) {
    const userId = req.session.userid
    if (userId == null) return

    const user = await User.findOne({
      where: {
        id: userId,
      },
      include: Tought,
      plain: true,
    })

    const toughts = user.Toughts.map(result => result.dataValues)

    res.render('dashboard', { toughts })
  }

  static createTought(req, res) {
    res.render('create')
  }

  static async createToughtSave(req, res) {
    const tought = {
      title: req.body.title,
      UserId: req.session.userid,
    }

    tought.title = capitalized(tought.title)

    try {
      await Tought.create(tought)
      req.flash('success', 'Pensamento criado com sucesso!')
      req.session.save(() => {
        res.redirect('dashboard')
      })
    } catch (error) {
      console.error('Ocorreu um erro:', error)
    }
  }

  static async removeTought(req, res) {
    const id = req.body.id
    const UserId = req.session.userid

    try {
      await Tought.destroy({ where: { id: id, Userid: UserId } })
      req.flash('success', 'Pensamento removido com sucesso!')
      req.session.save(() => {
        res.redirect('dashboard')
      })
    } catch (error) {
      console.log('Ocorreu um erro:', error)
    }
  }

  static async updateTought(req, res) {
    const id = req.params.id
    const tought = await Tought.findOne({ where: { id: id }, raw: true })
    res.render('edit', { tought })
  }

  static async updateToughtSave(req, res) {
    const id = req.body.id

    const tought = {
      title: req.body.title,
    }

    try {
      await Tought.update(tought, { where: { id: id } })

      req.flash('success', 'Pensamento atualizado com sucesso!')
      req.session.save(() => {
        res.redirect('/dashboard')
      })
    } catch (error) {
      console.log('Ocorreu um erro:', error)
    }
  }
}

module.exports = ToughtController
