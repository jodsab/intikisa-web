const express = require('express');
const app = express();
const cors = require('cors');

const morgan = require('morgan');

var mysql = require('mysql');

//settings
app.set('port', 4000)

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(cors());

//MySql
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'intikisa_server'
  });

  connection.connect(error => {
    if(error) throw error;
    console.log('Database server running')
});

app.post('/register', (req,res) => {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    connection.query("INSERT INTO users (user_name, user_email, user_password) VALUES (?,?,?)", [username, email, password], (err, result) => {
        if(err){
            res.send({err: err});
        } else{
            if (result) {
                res.send(result)
            } else{
                res.send({message: "Wrong username password combination! "})
            }
        }
    } )
})

app.post('/login', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    connection.query("SELECT * FROM users WHERE user_name = ? AND user_password = ?", [username, password], (err, result) => {
        if(err){
            res.send({err: err});
        } else{
            if (result) {
                res.send(result)
            } else{
                res.send({message: "Wrong username password combination! "})
            }
        }
        
    })
})

//incializacion
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'))
})