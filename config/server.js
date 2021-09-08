// Importa o módulo do framework express
var express = require('express');

// Importa o módulo do consign
var consign = require('consign');

//Importa o módulo body-parser
var bodyParser = require('body-parser');

//Importa o módulo express-validator
var expressValidator = require('express-validator');

// Inicia o objeto do express
var app = express();

//settar as variáveis 'view engine' e 'view' do express
app.set('view engine', 'ejs');
app.set('views', './app/views');

//Configuração do middleware express.static
app.use(express.static('./app/public'));

//Configuração do middleware body-parse
app.use(bodyParser.urlencoded({extended: true}));

//Configuração do middleware express-validator
app.use(expressValidator());

//Efetua o upload das rotas, dos models e dos controllers para o objeto app
consign()
    .include("app/routes")
    .then("app/models")
    .then("app/controllers")
    .into(app);

//exporta o objeto app
module.exports =app;