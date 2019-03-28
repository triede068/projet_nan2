require('babel-register')
const {success, error} = require('./functions')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const config = require('./config')

const db = mysql.createConnection({
    host: 'localhost',
    database: 'nodejs',
    user: 'root',
    password: ''
})
db.connect((err) => {

    if (err)
        console.log(err.message)
    else {

        console.log('Connected.')

        const app = express()

app.get('/',function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./views/index.html', function (err,data) {
        res.end(data);
    });
});
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/hello/:name', function(req,res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Hello ' + req.params.name + '!'}));
});


var db = new mysql.Database(':memory:');

db.serialize(function() {
    db.run("create table users (login, name)");

    var stmt = db.prepare("INSERT INTO commander values (?, ?, ?, ?, ?, ?)");
    var users = [ { nom: '',  commune: '' },
                  { prenom: '',    quartier: '' },
                  { telephone: '', lieu: '' } ];

    

    db.each("SELECT login, name from users", function(err, row) {
       console.log(row.login + ": " + row.name);
    });


app.listen(8080);
console.log('Start on port 8080')
