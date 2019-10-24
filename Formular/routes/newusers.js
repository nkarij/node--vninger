var express = require('express');
var router = express.Router();
var fs = require('fs');
// installere bodyparser
var bodyParser = require('body-parser');
// skaber key value pairs, som gør det let at tage imod bodyparser data.
var urlEncodedParser = bodyParser.urlencoded({extended: true})
/* GET users listing. */
router.get('/', function(req, res, next) {
    //   res.send('respond with a resource');
    var html = '';
    html += "<body>";
    html += "<form action='/newusers' method='post' mail='form1'>";
    html += "Mail: <input type='text' name ='email'><br/>";
    html += "<input type='submit' value='submit'><br/>";
    html += "</form>";
    html += "</body>";
    res.send(html);
});

// router.post('/', urlEncodedParser, function(req,res){
    // var reply ='';
    // reply += "<br/>Your mail is " + req.body.email;
    // res.send(reply);
    // res.send(req.body.email);
// });

router.post('/', urlEncodedParser, function(req,res){
    var reply ='';
    reply += "<br/>Your mail has been send";
    
    fs.readFile('users.json', (err,data) => {
        if(err){
            throw err;
        } else {
            let users = JSON.parse(data);
            console.log(users);

            let newID = users.length +1;
            console.log(newID);

            let newUser = {
                "id": newID,
                "email" : req.body.email
            }

            users.push(newUser);
            console.log(users);

            let saveUsers = JSON.stringify(users, null, 2);

            fs.writeFile('users.json', saveUsers, (err, data) => {
                if(err) throw err;
            }); 
        }
        // sender besked til browseren
        // res.send("saved new user");
        res.send(reply);
    })
});

module.exports = router;