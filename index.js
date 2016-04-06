var http = require("http");
var logs = require("./hotels_mdl/config").compilerLogs;

http.createServer(function(req, res) {
	res.writeHead(200);
	var hotels = require("./hotels_mdl");
	res.write(JSON.stringify(logs)+"\n");
	res.end("Success\n");
}).listen(8080);
console.log("listening on port 8080");