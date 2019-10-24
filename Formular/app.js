var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var newUsersRouter = require('./routes/newusers');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// ny route, som refererer filsti
app.use('/newusers', newUsersRouter);
module.exports = app;

// app.post('/mailaddress', urlEncodedParser, function(req,res){
//     var reply ='';
//     reply += "<br/>Your mail is " + req.body.email;
//     res.send(reply);
// });

// app.get('/hello', function(req,res){
//     var html = '';
//     html += "<body>";
//     html += "<form action = '/mailadd' method ='post' mail='form1'>";
//     html += "Mail: <input type='text' name ='mail'><br/>";
//     html += "<input type='submit' value = 'submit'><br/>";
//     html += "</form>";
//     html += "</body>";
//     res.send(html);
// });