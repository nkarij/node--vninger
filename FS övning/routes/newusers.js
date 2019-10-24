var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  // først løses json filen.
  fs.readFile('users.json', (err, data) =>  {
    if(err) {
      throw err;
    } else {
      // hent data fra filen. NB filen skal eksistere
      let users = JSON.parse(data);
      // res.send(users);

      // opret ny user
      let newUser = {
        "id" : 3,
        "username" : "Martin Martinsson",
        "email" : "martin@mail.com"
      }

      // push til user-data-array
      users.push(newUser);

      // stringify user-data.
      // null, 2 sørger for at indentere JSON pænt når der skrives til filen.
      let saveUsers = JSON.stringify(users, null, 2);

      // her overskrives json filen, med hele det nye dataarray.
      fs.writeFile('users.json', saveUsers, (err, data) => {
        if(err) throw err;
      })

      // sender besked til browseren
      res.send("saved new user");

    }

  });

});

module.exports = router;
