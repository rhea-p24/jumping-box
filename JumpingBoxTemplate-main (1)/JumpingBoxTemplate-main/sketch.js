var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1=createSprite(200,400,50,10);
    surface1.shapeColor="purple";
    surface2=createSprite(300,400,50,10);
    surface2.shapeColor="red";
    surface3=createSprite(400,400,50,10);
    surface3.shapeColor="blue";
    surface4=createSprite(500,400,50,10);
    surface4.shapeColor="yellow";



    //create box sprite and give velocity
    box=createSprite(500,200,30,30);
    box.shapeColor="white";
    box.velocityY=6;
    box.velocityX=6;

  


}

function draw() {
    background(rgb(169,169,169));
   
    createEdgeSprites();

    



    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor="purple";
        }
     if(surface2.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor="red";
            }
     if(surface3.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor="blue";
                }
     if(surface4.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor="yellow";
                    }

   drawSprites();
}
