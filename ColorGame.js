// alert("CONNECTED");
// var colors = [
//   "rgb(255, 0, 0)",
//   "rgb(255, 255, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 255, 255)",
//   "rgb(0, 0, 255)",
//   "rgb(255, 0, 255)"
// ]


// var pickedColor = colors[3];
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 9;
var modeButtons = document.querySelectorAll(".mode");

//run colors
initialize();

function initialize(){
  setUpModeButtons();
  squareSetUp();
  reset();
}

//button modes
    function setUpModeButtons(){
	for(var i = 0;i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

    //this.textContent === "Easy" ? numSquares = 6 : numSquares 9;
    if (this.textContent === "Easy") {
      numSquares = 6;
    } else {
      numSquares = 9;
    }
    reset();


  });
}
}


// easyBtn.addEventListener("click", function() {
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.background = colors[i];
//     } else {
//       squares[i].style.display = "none"
//     }
//   }
//   })
//
//   hardBtn.addEventListener("click", function() {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 9;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.background = colors[i];
//         squares[i].style.display = "block";
//     }
//     colorDisplay.textContent = pickedColor;
//   })


function squareSetUp(){
for(var i = 0; i < squares.length; i++){
  // add default colors to squares
  squares[i].style.background = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function(){
    // grab color of clicked square
    var clickedColor = this.style.background;
    // compare clicked colors
    if (clickedColor === pickedColor) {
      // alert("Correct! / Correcto!");
      messageDisplay.textContent = "Correct!"
      changeColors(clickedColor);
      h1.style.background = clickedColor;
      resetButton.textContent = "Play Again?"
    } else {
      // alert("Wrong!!! / Equivocado!!!");
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again"
    }
  });
}
}


resetButton.addEventListener("click", function() {
  //reset();

  //generate new colors
  colors = generateRandomColors(numSquares);
  //pick new random colors from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change array colors
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = ""
  h1 .style.background = "firebrick";
});

function reset(){
  colors = generateRandomColors(numSquares);
  //pick new random colors from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change array colors
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }

  }
  // resetButton.textContent = "New Colors"
  // messageDisplay.textContent = "";

  resetButton.textContent = "New Colors"
  messageDisplay.textContent = ""
  h1 .style.background = "firebrick";
}

function changeColors(color){
  // loop through squares and chage color to match correct colors
  for (var i = 0; i < squares.length; i++) {

    squares[i].style.background = color;
  }
}

function pickColor() {
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}

function generateRandomColors(num){
  //make array
  var arr = []
  // add num random colors to array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
  }
    // get random colors for array
    return arr;
}

function randomColor(){
  //R 0-255
  var r = Math.floor(Math.random() * 256);
  //G 0-255
  var g = Math.floor(Math.random() * 256);
  //B 0-255
  var b = Math.floor(Math.random() * 256);
  "rgb(r, g, b)"
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
colorDisplay.textContent = pickedColor;
