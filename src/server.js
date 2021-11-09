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

app.post('/:user/carrito/agregando', (req,res) => {
    const user = req.body.user;
    const producto = req.body.producto;

    connection.query("UPDATE users SET user_carrito = ? WHERE id_user = ?" , [producto, user], (err, result) => {
        if (err){
            res.send({err: err});
        } else{
            if (result){
                res.send(result)
            } else {
                res.send({message: "Carrito no es posible ingresar"})
            }
        }
    })
})

app.post('/:user/carrito/leyendo', (req,res) => {

    const {userid} = req.body.userid;

    connection.query("SELECT user_carrito FROM users WHERE id_user = ?", [userid], (err, result) => {
        if (err){
            res.send({err: err});
        } else{
            if (result){
                res.send(result)
                res.send(`<p>User: ${result} </p>`)
            } else {
                res.send({message: "Carrito no es posible leer"})
            }
        }
    })
})

//incializacion
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'))
})