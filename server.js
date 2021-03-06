const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./routes/web');
routes(app);

app.listen(3000, ()=>{
  console.log("server ok");
});
