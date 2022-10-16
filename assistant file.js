//use your mouse to choose your cards and see the sign!
let APIdata; // holds the entire API response
//let bgColor, txtColor; // vars for colors
let txtColor
let joke; // holds the AQI value 

// preload is called before anything else (even setup()!)
// useful for calling APIs and loading images/video/sounds
function preload() {
  let url = 'https://api.chucknorris.io/jokes/random';
  APIdata = loadJSON(url); // saves the API data into this variable
}


function setup() {
  createCanvas(800, 800);
  // print out the API data
  console.log('*****API response below****');
  console.log(APIdata);
  console.log('*****API response above****');
  // parse the API for what we're looking for and print it out
  joke = APIdata.value;
  console.log('joke content:' + APIdata.value);
}

  // change the colors depending on the AQI value
  /* if (aqi <= 50) {
    bgColor = color(0, 255, 0);
    txtColor = color(0);
  } else if (aqi > 50 && aqi <= 100) {
    bgColor = color(255, 255, 0);
    txtColor = color(0);
  } else if (aqi > 100 && aqi <= 150) {
    bgColor = color(255, 126, 0);
    txtColor = color(255);
  } else if (aqi > 151 && aqi <= 200) {
    bgColor = color(255, 0, 0);
    txtColor = color(255);
  } else if (aqi > 201 && aqi <= 300) {
    bgColor = color(143, 63, 151);
    txtColor = color(255);
  } else if (aqi > 301) {
    bgColor = color(126, 0, 35);
    txtColor = color(255);
  }
} */

function draw() {
  background(0,0,255);
  fill(255,0,0);
  textSize(16);
  textAlign(CENTER);
  text('Joke: ' + joke, 400, 200);
}
