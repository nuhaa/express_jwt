'use strict';

var response = require('./response');
var conn = require('./connection');

exports.index = function(req, res){
  response.ok('Ok',res);
}

// menampilkan data pegawai
exports.list = function(req, res) {
  conn.query('select * from pegawais', function(error, rows, fields) {
    if (error) {
      console.log(error);
    }else{
      response.ok(rows,res);
    }
  })
}

exports.getSingle = function(req, res) {
  let id = req.params.id;
  conn.query('select * from pegawais where id =?',[id], function(error, rows, fields) {
    if (error) {
      console.log(error);
    }else{
      response.ok(rows,res);
    }
  })
}
