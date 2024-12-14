const fs = require("fs");
const path = require("path");

//Criar uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Error: ", error);
//   }

//   console.log("Pasta criada com sucesso");
// });

//Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Error: ", error);
    }

    console.log("Arquivo criado com sucesso");

    //Adicionar à um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "Adicionando conteúdo",
      (error) => {
        if (error) {
          return console.log("Error: ", error);
        }

        console.log("Arquivo adicionado com sucesso");
      }
    );
    // Ler um arquivo
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Error: ", error);
        }
        console.log(data);
      }
    );
  }
);
