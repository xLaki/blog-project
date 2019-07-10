// Linking packages to app.js
const express    = require('express')
const ejs        = require('ejs')
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended: false})
const mysql      = require('mysql');

const dummyData = [{blogTitle: "", blogBody: "some text" }];

const app = express();

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin2',
    password : 'student',
    database : 'Blogprojects'
});

db.connect(function(err){
    if (err) throw err
    console.log('mysql is connected')
})

app.set('view engine', 'ejs');

app.use(express.static('./public'))

app.get('/blog', function(req, res){
    res.render('blog.ejs')
})

app.get('/create-blog', function(req, res){
    res.render('create-blog')
})

app.get('/view-blog', function(req, res){
    let sql = 'SELECT * FROM bloginfo';
    db.query(sql, function (err, results) {
        if (err) throw err;
        // rendering tasks view and passing taskToDo data
        res.render('view-blog', {currentBlogs: results});
    });
})

// app.post('/post', urlEncoded, function(req, res){
//     // formatting for incoming data to add to data set
//     let incomingPost = {};
//     incomingPost.blogTitle = req.body.blogTitle;
//     incomingPost.blobloginfoy = req.body.blogBody;
//     dummyData.push(ibloginfoingPost);
//     console.log(dummbloginfoa)
//     res.redirect('/vbloginfoblog');
// });

app.get('/', (req, res) => {
    let sql = 'SELECT * FROM bloginfo';
    db.query(sql, function (err, results) {
        if (err) throw err;
        // rendering tasks view and passing taskToDo data
        res.render('view-blog', {taskToDo: results});
    });
});

// Post for tasks: posting a task
app.post('/view-blog', urlEncoded, (req, res) => {
    let bloginfo = req.body
    console.log('post[0].blogtitle')
    let sql = 'INSERT INTO bloginfo SET ?';
    db.query(sql, bloginfo, function (err, results) {
        if (err) throw err;
        // rendering tasks view and passing taskToDo data
        console.log(results);
        res.redirect('/view-blog');
    });
});


app.listen(3000, function(req, res){
console.log('server is live 3000')
})