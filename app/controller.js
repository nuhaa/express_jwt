'use strict';

var response = require('./../resource/response');
var conn = require('./../config/connection');

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


exports.create = function(req, res) {
  let nama = req.body.nama;
  let bagian = req.body.bagian;
  conn.query('insert into pegawais (nama, bagian) values (?,?)', [nama,bagian], function(error, rows, fields){
    if (error) {
      console.log(error);
    }else{
      response.ok('Data Berhasil Disimpan', res);
    }
  });
}


exports.edit = function(req, res){
  let id = req.params.id;
  let nama = req.body.nama;
  let bagian = req.body.bagian;
  conn.query('update pegawais set nama=?, bagian=? where id=?', [nama, bagian, id], function(error, rows, fields){
    if (error) {
      console.log(error);
    }else{
      response.ok('Data Berhasil Diperbaharui', res);
    }
  });
}

exports.delete = function(req, res) {
  let id = req.body.id;
  conn.query('delete from pegawais where id=?',[id], function(error, rows, fields){
    if (error) {
      console.log(error);
    }else {
      response.ok('Data Berhasil Dihapus', res);
    }
  });
}
