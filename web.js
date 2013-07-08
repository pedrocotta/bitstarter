var express = require('express');

var fs = require ('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

    response.send(readfile('./index.html'));
    //response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var readfile = function (fileName) {
    var buffer = fs.readFileSync(fileName);
    return buffer.toString();
}














