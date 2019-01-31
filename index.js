// constants

const exp = require("express");
const port = process.env.PORT || 10000;
const path = require("path");
const bodyParser = require("body-parser");

var pF = path.resolve(__dirname, "public");
var app = exp();

const server = require("http").createServer(app);

app.use("/scripts", exp.static("build"));
app.use("/css", exp.static("style"));
app.use("/pages",exp.static("public"));
app.use("/dependencies",exp.static("src"))

app.get("/menufooter", function(req, resp){
    resp.sendFile(pF+"/menufooter.html")
});

server.listen(8090, function(err){
    if(err){
        console.log(err);
        return false;
    }
    
    console.log(port+" is running");
});