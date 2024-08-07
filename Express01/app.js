/*const express = require('express')
const app = express()
app.get('/hello', function(req, res){
    res.send("Hello World <br/>Bye World...")
    })

console.log("Hello World")
console.log("Bye World...")
app.listen(9999,function(){
console.log("Server is running on PORT 9999")
})*/

let http = require('http');
let url = require('url');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
/*Use the url module to turn the querystring into an object:*/
var q = url.parse(req.url, true).query;
/*Return the year and month from the query object:*/

//Assign1
// Use http://localhost:9999/?year=2017&month=July

//var txt =q.year + " " + q.month ;

//Assign 2 
// Use http://localhost:9999/?year=2024&month=July&name=Pocharapon%20Wiratpong&date=31

var txt = "Name: "+ q.name + "<br/>Login Date: " +q.date +" "+ q.month + " " + q.year + "<br/>" ;

res.end(txt);
}).listen(9999);


