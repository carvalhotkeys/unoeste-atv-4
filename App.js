const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');  // Use mysql2 em vez de mysql para melhor compatibilidade com caching_sha2_password
const os = require('os');

const app = express();

// Configuração da Conexão com o Banco de Dados
const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '123',
    database: 'universidade'
});

// Conectando ao Banco de Dados
connection.connect(error => {
    if (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        return;
    }
    console.log('Conectado ao banco de dados');
});

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
            mensagem: "liveness, MEU APP ESTÁ VIVO!",
            path: "",
            gid: "",
            uid: "",
            date: new Date().getTime()
        });
});

app.get('/readiness', (request, response) => {
    return response
        .status(200)
        .json({
            status: true,
            mensagem: "readiness, MEU APP ESTÁ PRONTO!",
            os: os.platform(),
            freemem: os.freemem(),
            homedir: os.homedir(),
            date: new Date().getTime()
        });
});

app.get('/consulta-dados', (req, res) => {
    connection.query('SELECT * FROM Pessoas', (error, results) => {
        if (error) {
            console.error('Erro ao consultar dados:', error);
            return res.status(500).json({ error: 'Erro ao consultar dados' });
        }
        res.json(results);
    });
});

module.exports = app;
