var http = require('http');
//loads http module
var app=http.createServer(function (req, res) {
//creates server
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //sets the right header and status code
  res.end('Hello World\n');
  //outputs string with line end symbol
});

var port = 1337
app.listen(port, function() {
  console.log("Listening on " + port);
});
console.log('Server running at port: ' + port);
