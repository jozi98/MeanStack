var http = require("http");
const PORT = process.env.PORT || 3000;


http.createServer(function(request,response){


  response.writeHead(200,{'Content-Type':'text/plain'})

  response.end('Hello World\n');

}).listen(PORT); // This is saying that the port will be listened on the port given from Heroku

console.log('Server running at http://1270.0.0.1:8080');
