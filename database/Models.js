//CRIANDO TABELA UTILIZANDO (SEQUELIZE)

const { Sequelize, Model } = require("sequelize");
const connection = require('./database');

const PerguntaModel = connection.define('TabelaNome', {
    titulo: {
        type: Sequelize.STRING, allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT, allowNull: false
    }
},{});

PerguntaModel.sync({force: false}) // Passando tabela para o banco 
.then(()=>{});

module.exports = PerguntaModel 




