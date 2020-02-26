///////////////////////////////////////////////////////////////////
// load the express package and create our app
var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;
// set the port based on environment (more on environments later)
var port = PORT;
// send our index.html file to the user for the home page
app.get('/', function(req, res) {
  // This loads the index.html once the default domain is called on.
  // Its essentially mapping things
 res.sendFile(__dirname+'/index.html');



 ///////////////////////////////////////////////////////////////////
// create routes for the admin section
//get an instance of the router
var adminRouter = express.Router();
// admin main page. the dashboard (http://localhost:PORT/admin)
// This is the basic page that is loaded when /admin is called
adminRouter.get('/', function(req, res) {
 res.send('I am the dashboard!'); });
// users page (http://localhost:PORT/admin/users)

///////////////////////////////////////////////////////////////////
// route middleware that will happen on every request
 adminRouter.use(function(req, res, next) {
 // log each request to the console
 console.log(req.method, req.url);
 console.log("Hello")
 // continue doing what we were doing and go to the route
 next(); });

 // route middleware to validate :name
 adminRouter.param('name', function(req, res, next, name) {
 // do validation on name here
 // log something so we know its working
 console.log('doing name validations on ' + name);
 // once validation is done save the new item in the req
 req.name = name;
 // go to the next thing
 next();
 });

//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// posts page (http://localhost:PORT/admin/users)
adminRouter.get('/users', function(req, res) {
 res.send('I show all the users!'); });
// posts page (http://localhost:PORT/admin/posts)
adminRouter.get('/posts', function(req, res) {
 res.send('I show all the posts!'); });

 // route with parameters (http://localhost:PORT/admin/users/:name)
  adminRouter.get('/users/:name', function(req, res) {
  res.send('hello ' + req.params.name + '!'); });


// apply the routes to our application
app.use('/admin', adminRouter);


///////////////////////////////////////////////////////////////////
});
// start the server
app.listen(PORT);
console.log('Express Server running at http://127.0.0.1:'+PORT);
///////////////////////////////////////////////////////////////////
