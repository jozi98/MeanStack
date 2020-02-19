var http = require("http");
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log('App is running on port ${PORT}');

})

http.createServer(function(request,response){


  response.writeHead(200,{'Content-Type':'text/plain'})

  response.end('Hello World\n');

}).listen(8080);

console.log('Server running at http://1270.0.0.1:8080');
