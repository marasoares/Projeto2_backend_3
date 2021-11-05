const express = require("express");  //chamando o express
const app = express();  //definindo o app como express

app.use(express.json());  //definindo o JSON no projeto

const Conn = require("./model/conn/index"); //importando a conexao

Conn(); //executa a func de conexao

const port = 3000; //porta do node

const paisesRouter = require("./routers/paises.routers");
app.use('/paises',paisesRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});