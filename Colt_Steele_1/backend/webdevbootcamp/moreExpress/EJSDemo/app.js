var express = require("express");
var app = express();

//servie public dir
app.use(express.static("public"));

//root - route
app.get('/', (req, res) => {
    res.render("home.ejs");
});

//random test route
app.get('/fallinlovewith/:thing', (req, res) => {
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});

//posts route
app.get('/posts', (req, res) => {
    var posts = [
        {title: "post 1", author: "susy" },
        {title: "post 2", author: "jamie" },
        {title: "post 3", author: "kaytie" }
    ];
    
    res.render("posts.ejs", {posts: posts});
});

app.get('*', (req, res) => {
    res.send("Sorry the page you are looking for is unavailable");
});
//set server to listen
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});