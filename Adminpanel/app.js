var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var newUsersRouter = require('./routes/newusers');
var adminRoute = require('./routes/admin');
var userList = require('./routes/userlist');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// ny route, som refererer filsti
app.use('/newusers', newUsersRouter);
app.use('/admin', adminRoute);
app.use('/users', userList);

// PUBLIC MAPPEN
/* Forbind til Public Mappen, skal stå efter ROUTES */
// app.use(express.static('public'));
// app.use('/static', express.static('public'))

module.exports = app;


// SE SEPERATE ROUTE-FILER ISTEDET FOR NEDENSTÅENDE

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