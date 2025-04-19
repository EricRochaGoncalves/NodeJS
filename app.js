const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Seja bem vindo ao meu app")
});

app.get("/sobre", function(req, res){
    res.send("Seja bem vindo a minha página sobre")
})
app.get("/blog", function(req, res){
    res.send("Seja bem vindo ao meu blog")
})



app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081!");
})

