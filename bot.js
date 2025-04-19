// Importando o módulo readline
const readline = require('readline');

// Criando a interface de leitura/escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função que responde conforme o comando do usuário
const chatBot = (input) => {
  if (input === 'olá') {
    console.log('Bot: Olá! Como você está?');
  } else if (input === 'tchau') {
    console.log('Bot: Tchau! Foi bom conversar com você!');
  } else if (input === 'como vai?') {
    console.log('Bot: Eu estou bem, obrigado! E você?');
  } else if (input === 'meu nome é eric') {
    console.log('Bot: Prazer, Eric! Como posso te ajudar hoje?');
  } else if (input === 'ajuda') {
    console.log('Bot: Eu posso te ajudar com perguntas simples como "olá", "tchau", ou "como vai?".');
  } else {
    console.log('Bot: Desculpe, não entendi. Tente perguntar de outra forma.');
  }
};

// Perguntar diretamente ao usuário e chamar a função
rl.question('Digite algo para conversar com o bot: ', chatBot);
