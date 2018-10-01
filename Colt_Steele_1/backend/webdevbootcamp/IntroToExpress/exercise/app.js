var express = require("express");
var app = express();

app.get('/', (req, res) => {
    res.send("Hi there, welcome to my assignment");
});

app.get('/speak/:animal', (req, res) => {
    var sounds = {
        pig: "Oink",
        cow: "Moo!",
        dog: "Woof Woof!",
        cat: "I hate you!",
        goldfish: "..."
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];

    res.send("The " + animal + " says '" + sound + "'");
});

app.get('/repeat/:string/:amount/', (req, res) => {
    var string = req.params.string;
    var result = "";
    var amount = parseInt(req.params.amount);

    for (let i = 0; i < amount; i++) {
       result+=string+" ";
    }

    res.send(result);
});

app.get('*', (req, res) => {
    res.send("Sorry, page not found...What are you doing with your life?");
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});