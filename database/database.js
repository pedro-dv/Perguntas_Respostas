const { Sequelize } = require('sequelize'); 

const connection = new Sequelize('my_db', 'root', 'L1nux2906*', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
