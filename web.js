var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var file_sync = fs.readFileSync('index.html','utf-8');
  var file = new Buffer(file_sync).toString();	  
  response.send(file);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
