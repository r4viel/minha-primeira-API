const fs = require('fs');
const path = require('path');

//fs.mkdir(path.join(__dirname, '/test'), (error) => {
// if (error) {
//   return console.log("Erro: ",error);
//  }
//  console.log('pasta criada com sucesso');
//});

fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'Hello node', (error) => {
  if (error) {
    return console.log("Erro: ",error);
  }
  console.log('Arquivo criado com sucesso');

  fs.appendFile(path.join(__dirname, '/test', 'test.txt'), '\nHello world', (error) => {
  if (error) {
    return console.log("Erro: ",error);
  }
  console.log('Arquivo atualizado com sucesso');
});
// ler arquivo
fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf-8', (error, data) => {
  if (error) {
    return console.log("Erro: ",error);
  };
    console.log(data); 
});
});

