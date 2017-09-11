const port = 3003

const bodyParser = require("body-parser")
const express = require("express")
const server = express()

server.use( bodyParser.json() );
server.use( bodyParser.urlencoded({ extended: true }) );

require('../routes')(server);

server.listen( port, function(){
  console.log(`API is running on port ${port}.`)
});

server.get('*', (req, res) => res.status(200).send({
  message: 'Bem-vindo a API do GIP',
}));

module.exports = server;
