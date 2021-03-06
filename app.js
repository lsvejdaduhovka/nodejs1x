const http = require("http");
const fs = require("fs");
const apiSvatky = require("./api-svatek.js").apiSvatky;
const apiVtip = require("./api-vtip.js").apiVtip;

function main(req, res) {
    console.log(req.url);
    if (req.url == "/") {
        let s = fs.readFileSync("index.html");
        res.writeHead(200, "Content-type: text/html");
        res.end(s);
    } else if (req.url == "/appver") {
        let obj = {};
        obj.name = "nodejs1x";
        obj.version = "0.0.0.2";
        res.writeHead(200, "Content-type: application/json");
        res.end(JSON.stringify(obj));
    } else if (req.url == "/vtip") {
        apiVtip(req,res);
    } else if (req.url == "/svatek") {
        apiSvatky(req,res);
    } else if (req.url.endsWith(".jpg")) { //konci na ".jpg"
        let fileName = req.url.substr(1); //zkopiruje od druheho znaku
        console.log("fileName:"+fileName);
        if (fs.existsSync(fileName)) {
            let s = fs.readFileSync(fileName);
            res.writeHead(200, "Content-type: image/jpeg");
            res.end(s);
        } else {
            console.error("Soubor "+fileName+" neexistuje!");
            res.writeHead(404);
            res.end();
        }
    } else {
        res.end("Kuk!");
    }
}

let srv = http.createServer(main);
srv.listen(8080);
console.log("Server jede na http://localhost:8080");