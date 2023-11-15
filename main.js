const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {dirname } = require('path');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname +  '/test'));

// Rotas

app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html");

});



app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000");
});
