var express = require("express");
var app = express();

//servie public dir
//need to tell app to use public dir
app.use(express.static("public"));
app.set('view engine', 'ejs');

//root - route
//default route
app.get('/', (req, res) => {
    //render the page
    res.render("home");
});

//random test route
app.get('/fallinlovewith/:thing', (req, res) => {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

//posts route
app.get('/posts', (req, res) => {
    var posts = [
        {title: "post 1", author: "susy" },
        {title: "post 2", author: "jamie" },
        {title: "post 3", author: "kaytie" }
    ];
    
    res.render("posts", {posts: posts});
});

//catch any routes not defined
app.get('*', (req, res) => {
    res.send("Sorry the page you are looking for is unavailable");
});

//set server to listen
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});