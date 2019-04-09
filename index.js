//dependencies
const express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');

//initialization
const app = express();
const port = 3600;

//bodyParser reqs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static('public'));

//ejs reqs
app.set('view engine', 'ejs');


//root URL GET
app.get('/', function(req, res) {
    res.render('main.ejs', {port:port});
});

//user URL GET
app.get('/user', function(req, res) {
    res.render('userCreate.ejs', {port:port});
})

//userCreate URL POST
app.post('/userCreate', function(req, res) {
    response = {
        username : req.body.username
    };
    
    console.log(response)
    res.redirect('http://localhost:' + port + '/user/' + req.body.username)
})

//userID URL GET
app.get('/user/:id', function(req, res) {
    res.render('user.ejs', {username:req.params.id, port:port});
})

app.listen(port, () => console.log(`Local host opened at port ${port}!`));