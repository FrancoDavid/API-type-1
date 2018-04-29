var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var bd = require('../conf/connection');
var connection = mysql.createConnection(bd);

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Timmy'}]});
});*/

router.get('/', function(req, res, next) {
  var query = "SELECT * FROM Documento;";

  connection.query(query, (error, result) => {
    if(error) throw error;
    res.json({code: 200, response: result});
  });
});

module.exports = router;
