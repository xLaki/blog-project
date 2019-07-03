// Linking packages to app.js
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express();

app.set('view engine', 'ejs');

app.get('/blog', function(req, res){
    console.log('bruh moment')
    res.render('blog')
})

app.listen(3000, function(req, res){
console.log('server is live')
})