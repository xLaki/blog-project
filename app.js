// Linking packages to app.js
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'))

app.get('/blog', function(req, res){
    res.render('blog')
})
app.get('/create-blog', function(req, res){
    res.render('create-blog')
})
app.get('/view-blog', function(req, res){
    res.render('view-blog')
})

app.listen(3000, function(req, res){
console.log('server is live')
})