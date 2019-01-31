// constants

const exp = require("express");
const port = process.env.PORT || 8080;
const path = require("path");
var favicon = require('serve-favicon');
const bodyParser = require("body-parser");

var pF = path.resolve(__dirname, "public");
var app = exp();

const server = require("http").createServer(app);

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use("/scripts", exp.static("build"));
app.use("/css", exp.static("style"));
app.use("/pages",exp.static("public"));
app.use("/dependencies",exp.static("src"))

app.get("/", function(req, resp){
    resp.sendFile(pF+"/menufooter.html")
});

server.listen(port, function(err){
    if(err){
        console.log(err);
        return false;
    }
    
    console.log(port+" is running");
});