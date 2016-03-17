var http = require('http');
var path = require('path');
var express = require('express');

var multer = require("multer");
var upload = multer({dest: "uploads/"});

var app = express();
var server = http.createServer(app);

app.use(express.static(path.resolve(__dirname, 'client')));

app.post('/uploads', upload.single("file"), function (req, res) {
  console.log(req.file);
  res.send({Size: req.file.size});
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("App listening at", addr.address + ":" + addr.port);
});
