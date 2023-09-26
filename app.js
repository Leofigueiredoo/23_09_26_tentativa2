const express = require('express');
const mysql = require('mysql');
const ejs = require('ejs');

const app = express();

// Configurações do banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'BancoUsuarios'
});

// Conectar ao banco de dados
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

// Configuração do EJS
app.set('view engine', 'ejs');

// Rota para a página principal
app.get('/', (req, res) => {
    db.query('SELECT * FROM Usuarios', (err, results) => {
        if (err) {
            console.error('Erro ao consultar o banco de dados:', err);
            return;
        }
        res.render('index', { users: results });
    });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
