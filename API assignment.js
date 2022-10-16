let Billboard;
let radio;


function preload(){
    Billboard = loadImage("Billboard.png");
    radio = loadImage("radio.png")
}
function setup (){
createCanvas(800, 800);
}
function draw(){
    background(0);
    image(Billboard,40, 360, 680, 400);
    image(radio, 444, 310, 165, 130); 

}
