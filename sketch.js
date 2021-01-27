var fixed,moving,box1,box2,box3;


function setup() {
  createCanvas(800,400);
 fixed =  createSprite(200, 380, 80, 30);
 fixed.shapeColor = "green";
 moving =  createSprite(300, 200, 30, 30);
 moving.shapeColor = "blue";
 box1 =  createSprite(100, 380, 80, 30);
 box1.shapeColor = "orange";
 box2 =  createSprite(405, 380, 80, 30);
 box2.shapeColor = "red";
 box3 =  createSprite(295, 380, 80, 30);
 box3.shapeColor = "yellow";





}

function draw() {
  background(255,255,255);
  moving.x = World.mouseX; 
  moving.y = World.mouseY;
  console.log(moving.x-fixed.x);

 

  if(moving.x-fixed.x<moving.width/2+fixed.width/2 && fixed.x-moving.x<moving.width/2+fixed.width/2 && moving.y-fixed.y<moving.height/2+fixed.height/2 && fixed.y-moving.y<moving.height/2+fixed.height/2){

    moving.shapeColor = "green";
    moving.collide(fixed);
  }
else{


  moving.shapeColor = "blue";

}


if(moving.x-box1.x<moving.width/2+box1.width/2 && box1.x-moving.x<moving.width/2+box1.width/2 && moving.y-box1.y<moving.height/2+box1.height/2 && box1.y-moving.y<moving.height/2+box1.height/2){

  moving.shapeColor = "orange";
  moving.collide(box1);
}
else{


moving.shapeColor = "blue";

}


if(moving.x-box2.x<moving.width/2+box2.width/2 && box2.x-moving.x<moving.width/2+box2.width/2 && moving.y-box2.y<moving.height/2+box2.height/2 && box2.y-moving.y<moving.height/2+box2.height/2){

  moving.shapeColor = "red";
  moving.collide(box2);

}
else{


moving.shapeColor = "blue";

}

if(moving.x-box3.x<moving.width/2+box3.width/2 && box3.x-moving.x<moving.width/2+box3.width/2 && moving.y-box3.y<moving.height/2+box3.height/2 && box3.y-moving.y<moving.height/2+box3.height/2){

  moving.shapeColor = "yellow";
  moving.collide(box3);

}
else{


moving.shapeColor = "blue";

}


  drawSprites();
}