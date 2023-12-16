const {Sequelize} = require('sequelize')

const db = new Sequelize('db_perpustakaan', 'root', '', {
	host: 'localhost',
	dialect: 'mysql'
} )

module.exports = db