var http = require("http");
fs = require('fs');
const PORT = process.env.PORT || 3000;


http.createServer(function(request,response){


  response.writeHead(200,{'Content-Type':'text/html','Access-Control-Allow-Origin':'*'})

  var readStream = fs.createReadStream('index.html');

  readStream.pipe(response);

  //response.end('Hello World\n');

  console.log(PORT);


}).listen(PORT); // This is saying that the port will be listened on the port given from Heroku
