const Sequelize = require ("sequelize");
const sql = require("../assets/sql");

module.exports = sql.define ("blog", {
	id : {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	username: {
		type: Sequelize.STRING(10),
		allowNull: true,
	},
	title: {
		type: Sequelize.STRING(30),
		allowNull: true,
	},
	body: {
		type: Sequelize.STRING(200),
		allowNull: true,
	},
});
