var http = require("http");

var port1 = 7000;
var port2 = 7500;


function handleRequest1(request,response){
	response.end("You can play sports super well!");
}

function handleRequest2(request,response){
	response.end("I hate all that you stand for!")
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(port1, function(){
	console.log("You're pretty cool");
})

server2.listen(port2, function(){
	console.log("You're not cool at all");
})