const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('🚀 Connected to MySQL 🚀')
} catch (err) {
  console.log('Could not connect to mysql:', err)
}

module.exports = sequelize
