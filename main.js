red = Math.floor(Math.random()*256);
green = Math.floor(Math.random()*256)
blue = Math.floor(Math.random()*256)
difference =0;
leftX = 0;
rightX=0;
noseX=0;
noseY=0;

function setup(){
  video=createCapture(VIDEO);
  video.size(600 , 600);
  canvas=createCanvas(650 , 650);
  canvas.position( 725 , 150);
  poseNet=ml5.poseNet(video , modelLoaded);
  poseNet.on("pose" , gotPoses);

  red = Math.floor(Math.random()*256);
  green = Math.floor(Math.random()*256);
  blue = Math.floor(Math.random()*256);

  sred = Math.floor(Math.random()*256);
  sblue = Math.floor(Math.random()*256);
  sgreen = Math.floor(Math.random()*256);
}

 function draw(){
    background(red , green , blue);
    fill(sred , sgreen , sblue);
    stroke(sred , sgreen , sblue);
    square(noseX , noseY , difference);

    document.getElementById("square-sides").innerHTML= "Current size of the square is "  + difference;
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if( results.length > 0 ){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftX=results[0].pose.leftWrist.x;
        rightX=results[0].pose.rightWrist.x;
        difference= floor(leftX - rightX);   }  
}

