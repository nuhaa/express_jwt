var mysql = require('mysql')

// koneksi db
const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'asd',
  database:'express_jwt'
});

conn.connect((err)=>{
  if (err) throw err;
  console.log("success connect");
});

module.exports = conn;
