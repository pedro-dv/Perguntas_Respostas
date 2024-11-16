
const { Sequelize, Model } = require("sequelize");
const connection = require('./database');

const RespostaModel = connection.define('tb_respostas', {
    corpo: {
        type: Sequelize.TEXT,
        allowNull:false
    },
    pergunta_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    } 
})

RespostaModel.sync({force: false})

module.exports = RespostaModel