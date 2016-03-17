/*
  User Story: I can submit a FormData object that includes a file upload.
  User Story: When I submit something, I will receive the file size in bytes within the JSON response
  Hint: You may want to use this package: https://www.npmjs.com/package/multer
*/
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
  res.send({
    Name: req.file.originalname,
    Size: req.file.size,
  });
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("App listening at", addr.address + ":" + addr.port);
});
