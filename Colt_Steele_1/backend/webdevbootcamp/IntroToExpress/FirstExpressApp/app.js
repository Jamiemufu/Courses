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

app.get('/dog', (req,res) => {
    res.send("MEOW!!");
    
    
});

//tell express to listen for requests (start server)
app.listen(3000, () => {
    console.log("server is connected");
});