
var canvas;
 var backgroundImage, bgImg, car1_img, car2_img, track;
  var database, gameState;
   var form, player, playerCount;
    var allPlayers, car1, car2;
     var cars = []; 
     
     function preload() {
        backgroundImage = loadImage("background.png");
         car1_img = loadImage("car1.png");
          car2_img = loadImage("car2.png"); 
          track = loadImage("track.jpg"); }

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
