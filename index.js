
const express = require("express");

const app = express();

app.listen(3000);

const database = require("./db/db");

const Usuario = require('./model/usuarioModel');

const Tarefa = require('./model/tarefaModel');

const routes = require('./routes/routes');

app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());



app.use("/", routes);


app.get("/",(req,res)=>{
  return res.json({message: "Sistema de lista de tarefas"})
});

try{
  database.sync().then(() => {
  })
} catch(erro) {
  console.log("Houve uma falha ao sincronizar com o banco de dados", erro);
};