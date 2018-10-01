var express = require("express");
var app = express();

// "/" => "Hi There"
// "/bye" => "Good Bye!"
// "/dog" => "MEOW!"


app.get("/", (req,res) => {
    res.send("Hi there!");
});

app.get("/bye", (req,res) => {
    res.send("Good Bye!");
});

app.get("/dog", (req,res) => {
    res.send("MEOW!!");
});
//SemiColon is a route variable
app.get('/r/:subredditName', (req, res) => {
    //params, value
    console.log(req);
    var subreddit = req.params.subredditName;
    res.send("Welcome to a" + subreddit);
});

app.get('/r/:subredditName/comments/:id/:title/', (req, res) => {
    res.send("Welcome to the comments page");
});

//catch all routes not designated (order matters)
app.get("*", (req, res) => {
    res.send("You are a star");
});

//tell express to listen for requests (start server)
app.listen(3000, () => {
    console.log("server is connected");
});