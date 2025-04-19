const { Types } = require('mysql2')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', 'Y@sp2006',{
    host: 'localhost',
    dialect: 'mysql'

})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
    

})

Postagem.create({
    titulo: "Titulo bacana",
    conteudo: "Conteúdo daora"
})
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
    

})

