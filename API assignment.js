//1. everytime by clicking the mouse, the canvas will be refreshed, and the API will be updated with a new joke coming out on the billboard
//2. sound file "nice.wav" was written in index.html, which is a looping background audio
//3. move the mouse horizontally, the cloud will move too
//4. the codes that I wrote in the p5js editor are slightly different from what I wrote on VScode, but the effect is similar

let APIdata; // holds the entire API response
let joke; // holds the AQI value 
let Billboard;//hold the image1 value
let radio;// hold the image2 value
let cloud;// hold the image3 value


//sth. called before anything else (API value + images + audio)
function preload(){
    let url = 'https://api.chucknorris.io/jokes/random';
  APIdata = loadJSON(url); // store the API data 
  Billboard = loadImage("Billboard.png");
    radio = loadImage("radio.png");
    cloud = loadImage("cloud.png");
}

//set the size of the canvas
function setup() {
  createCanvas(800, 800);
  
  // print out the API data
  console.log('API response 1');
  console.log(APIdata);
  console.log('API response 2');
  
  // show the specific API value 
  joke = APIdata.value;
  console.log('joke content:' + APIdata.value);
}

//get different jokes while mouse clicked
function mouseClicked(){
//can also use "top.location.reload();"to refresh the canvas page 
self.location.reload();  
}

//draw everything on the canvas
function draw() {

  //draw the background and the images
  background(255,239,213);
  image(Billboard,40, 360, 680, 400);
  image(radio, 444+random(-2,2), 310+random(-2,2), 165, 130);
  image(cloud, mouseX, 100, 300, 150)
  
  //floating instruction work
  let word = "Click the canvas to see a new joke"
  textSize(32);
  stroke(255, 0, 255)
  fill(255,0, 0)
  text(word,frameCount % width,100);
  
  //joke content on the billboard
  stroke(69,138,115)
  fill(69,139,116);
  textSize(19);
  textAlign(CENTER);
  text('Joke: ' + joke, 375, 470, 285, 250);
}
