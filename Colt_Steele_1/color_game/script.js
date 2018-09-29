var colors = generateRandomColors(numberOfSquares);

var pickedColor = pickColor();

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector('#easy');
var hardBtn = document.querySelector('#hard');
var numberOfSquares = 6;


easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        //if next colors (should be 3)
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            //anything after colors (3)
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        //if next colors (should be 3)
       squares[i].style.backgroundColor = colors[i];
       squares[i].style.display = "block";
    }
});


resetButton.addEventListener("click", function() {
    //generate new colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color
    pickedColor = pickColor();
    //change colors of squares
    colorDisplay.textContent = pickedColor;
    generateSquareColor();
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors?";
    messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

generateSquareColor();

function generateSquareColor() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        //add click events to squares
        squares[i].addEventListener("click", function () {
            //grab color
            var clickedColor = this.style.backgroundColor;
            //compare to picked color
            if (clickedColor == pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";   
            }
        });
    }
}

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    //floor = chop decimals - random number length of array
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make array
    var arr = []
    //add num random colors to array
    //repeat num times
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
        //get random color and push into array
        
    }
    return arr;
}

function randomColor() {
    //pick a red, green, blue 0 - 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}