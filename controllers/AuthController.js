const User = require('../models/User')

const bcrypt = require('bcryptjs')

class AuthController {
  static login(req, res) {
    res.render('login')
  }

  static async loginPost(req, res) {
    const { email, password } = req.body

    // find user
    const user = await User.findOne({ where: { email: email } })

    if (!user) {
      req.flash('error', 'Usuário não encontrado!')
      res.render('login')
      return
    }

    const passwordMatch = bcrypt.compareSync(password, user.password)

    if (!passwordMatch) {
      req.flash('error', 'Senha inválida!')
      res.render('login')
      return
    }

    req.session.userid = user.id

    req.flash('success', 'Autenticação realizado com sucesso!')

    req.session.save(() => {
      res.redirect('/')
    })
  }

  static register(req, res) {
    res.render('register')
  }

  static async registerPost(req, res) {
    const { name, email, password, confirmpassword } = req.body

    // password match validation
    if (password != confirmpassword) {
      req.flash('error', 'As senhas não conferem, tente novamente!')
      res.render('register')
      return
    }

    // check if empty inputs
    if (name === '' || email === '' || password === '') {
      req.flash('error', 'Os campos não podem estar vazios!')
      res.render('register')
      return
    }

    // check if user exists
    const checkIfUserExists = await User.findOne({
      where: { email: email },
    })

    if (checkIfUserExists) {
      req.flash('error', 'Email já está em uso')
      res.render('register')
      return
    }

    // create a password
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)

    const user = {
      name,
      email,
      password: hashedPassword,
    }

    try {
      const createdUser = await User.create(user)

      //initialize session
      req.session.userid = createdUser.id

      req.flash('success', 'Cadastro realizado com sucesso!')

      req.session.save(() => {
        res.redirect('/')
      })
    } catch (error) {
      console.log(error)
    }
  }

  static logout(req, res) {
    req.session.destroy()
    res.redirect('login')
  }
}

module.exports = AuthController
