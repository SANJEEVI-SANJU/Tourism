var express = require("express");
var app= express();

router.get("/", async (req, res) => {
	res.render("home");
});

/*app.get('/',function(req,res) {
    res.sendFile(__dirname + '/' +"login.html")
})
app.get('/home',function(req,res) {
    res.send("<h1>hello</h1>")
})
app.listen(8080);*/