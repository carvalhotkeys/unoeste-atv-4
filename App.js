const express = require('express');
const bodyParser = require('body-parser');

const os = require('os');

const app = express();


// Definindo uma rota para o método GET
app.get('/', (request, response) => {
    return response
    .status(200)
    .json({
        status: true,
        mensagem: "OK"
    });
});

app.get('/redirect', (request, response) => {
    return response.redirect(301, 'https://www.unoeste.br/');
});

app.get('/liveness', (request, response) => {
    return response
    .status(200)
    .json({
        status: true,
        mensagem: "liveness",
        path: "",
        gid: "",
        uid: ""
    });
});

app.get('/readiness', (request, response) => {
    return response
    .status(200)
    .json({
        status: true,
        mensagem: "readiness",
        os: os.platform(),
        freemem: os.freemem(),
        homedir: os.homedir()
    });
});

module.exports = app;
