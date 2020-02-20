exports.apiVtip = function(req,res) {
    let obj = {};
    obj.nadpis = "nějaký vtípek";
    obj.text = "blebleble...";
    res.writeHead(200, "Content-type: application/json");
    res.end(JSON.stringify(obj));
};
