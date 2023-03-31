img = "";
status =""; 
function setup(){
canvas = createCanvas(600,400);
canvas.center();
objectDetector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
image(img,0,0,600,400);
fill("#1b44fa");
text("bed",150,260);
stroke("#1b44fa");
noFill();
rect(150,250,300,200);

fill("#3d030b");
text("wall",235,15);
stroke("#3d030b");
noFill();
rect(1,5,600,240);
}

function preload(){
img = loadImage("okkk.jpg")
}

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}
