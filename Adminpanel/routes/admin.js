var express = require('express');
var router = express.Router();
// require filesystem (?)
var fs = require('fs');
// installere bodyparser
var bodyParser = require('body-parser');
// skaber key value pairs, som gør det let at tage imod bodyparser data.
var urlEncodedParser = bodyParser.urlencoded({extended: true})

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send("admin page");
    var html = '';
    html += "<body>";
    html += "<h2> Admin Login";
    html += "</h2>";
    html += "<form action='/admin' method='post' name='loginform'>";
    html += "<input type='text' placeholder='username' name='username'><br/>";
    html += "<input type='text' placeholder='password' name='password'><br/>";
    html += "<input type='submit' value='Login'><br/>";
    html += "</form>";
    html += "</body>";
    res.send(html);
});

/* GET admin home page. */
router.post('/', function(req, res, next) {
  // res.send("userlist page");
  let adminName = "admin";
  let adminPassword = "test";
  let nameInput = req.body.username;
  // console.log(nameInput);
  let passwordInput = req.body.password;

  if(nameInput == adminName && passwordInput == adminPassword) {
    fs.readFile('users.json', (err,data) => {
      if(err){
          throw err;
      } else {
          let users = JSON.parse(data);
          console.log(users);

          var html = '';
          
          users.forEach(user => {
              console.log(user);
              return html += "<p>" + user.email + "</p>";
          });

          res.send("<body><h2>Admin Page</h2>" + html + "</body>");
      }
    })
  } else {
    res.send("<body><h2>Der er sket en fejl</h2></body>")
  }
 
});


module.exports = router;
