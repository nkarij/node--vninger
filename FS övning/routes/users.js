var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  fs.readFile('users.json', (err, data) =>  {
    if(err) {
      throw err;
    } else {
      let users = JSON.parse(data);
      res.send(users);
    }

  });

});

module.exports = router;
