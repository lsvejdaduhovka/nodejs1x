const http = require("http");
const fs = require("fs");

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
        let obj = {};
        obj.nadpis = "nějaký vtípek";
        obj.text = "blablabla...";
        res.writeHead(200, "Content-type: application/json");
        res.end(JSON.stringify(obj));
    } else if (req.url == "/svatek") {
        let obj = {};
        obj.datum = "30.1.";
        obj.svatek = "Robin";
        res.writeHead(200, "Content-type: application/json");
        res.end(JSON.stringify(obj));
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