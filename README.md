# 🚀 Rotas + Banco de Dados com Node.js, Express e Sequelize

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Este repositório demonstra como criar **rotas simples com Express** e **conectar sua aplicação a um banco de dados MySQL usando Sequelize**. O código é simples, direto e funcional, ideal para quem está aprendendo essas tecnologias.

---

## 🧰 Tecnologias utilizadas

- **Node.js**
- **Express.js**
- **Sequelize**
- **MySQL**
- **JavaScript**

---

## 📁 Estrutura do Projeto

projeto/
├── server.js
└── package.json


---

## ▶️ Como rodar o projeto

1. Clone este repositório para sua máquina:

git clone https://github.com/seu-usuario/nome-do-repo.git

Acesse o diretório do projeto:

bash
Copiar código
cd nome-do-repo

Instale as dependências:

bash
Copiar código
npm install

Certifique-se de que o MySQL esteja rodando e crie o banco de dados sistemadecadastro:

sql:

CREATE DATABASE sistemadecadastro;

Execute o servidor:

bash

node server.js

📡 Rotas disponíveis

Rota	Método	Descrição

/	GET	Mensagem de boas-vindas
/sobre	GET	Página com descrição "sobre"
/blog	GET	Página com descrição do blog

🧠 Exemplos de criação com Sequelize

Criando um modelo de Postagem:

const Postagem = sequelize.define('postagens', {
  titulo: Sequelize.STRING,
  conteudo: Sequelize.TEXT
});

Criando um modelo de Usuário:

const Usuario = sequelize.define('usuarios', {
  nome: Sequelize.STRING,
  sobrenome: Sequelize.STRING,
  idade: Sequelize.INTEGER,
  email: Sequelize.STRING
});

Criando um usuário no banco de dados:

Usuario.create({
  nome: "Eric",
  sobrenome: "Rocha",
  idade: 19,
  email: "ericrochagoncalves59@gmail.com"
});

📂 Código do Servidor (server.js)
js
Copiar código
const express = require('express');
const Sequelize = require('sequelize');
const app = express();

// Middleware para interpretar dados de formulário
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rota GET
app.get('/', (req, res) => {
  res.send('Seja bem-vindo ao meu app');
});

// Rota sobre
app.get('/sobre', (req, res) => {
  res.send('Seja bem-vindo à minha página sobre');
});

// Rota blog
app.get('/blog', (req, res) => {
  res.send('Seja bem-vindo ao meu blog');
});

// Conexão com MySQL e Sequelize
const sequelize = new Sequelize('sistemadecadastro', 'root', 'Y@sp2006', {
  host: 'localhost',
  dialect: 'mysql'
});

// Definindo o modelo de Postagem
const Postagem = sequelize.define('postagens', {
  titulo: Sequelize.STRING,
  conteudo: Sequelize.TEXT
});

// Definindo o modelo de Usuario
const Usuario = sequelize.define('usuarios', {
  nome: Sequelize.STRING,
  sobrenome: Sequelize.STRING,
  idade: Sequelize.INTEGER,
  email: Sequelize.STRING
});

// Criando um usuário de exemplo
Usuario.create({
  nome: "Eric",
  sobrenome: "Rocha",
  idade: 19,
  email: "ericrochagoncalves59@gmail.com"
});

// Sincronizando com o banco de dados
Usuario.sync()
  .then(() => {
    console.log('Banco de dados sincronizado');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });

// Iniciar o servidor
app.listen(8081, () => {
  console.log('Servidor rodando na URL http://localhost:8081');
});

🗃️ Banco de Dados
Banco de Dados: sistemadecadastro

Tabelas: usuarios, postagens

✍️ Autor
Eric Gonçalves
Portfólio







