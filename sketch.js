var player1;
var maze;
var ghost1;
var ghost2;
var backgroundImage;
var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,a1,a2,a3,a4,q1;
var a6=[];

function preload(){
  maze = loadImage("maze.png");
  ghost11 = loadImage("download.png");
  ghost22 = loadImage("ghost2.png");
  player11 = loadImage("pacman.png");
}
function setup() {
  createCanvas(800,400);
  player1 = createSprite(685,373,40,40);
  ghost1 = createSprite(500,120,10,10);
  ghost2 = createSprite(310,120,40,40);
  player1.addImage(player11);
  player1.scale = 0.04
  // backgroundImage = createSprite(400,200);
  // backgroundImage.addImage(maze);
  ghost1.addImage(ghost11);
  ghost1.scale = 0.3
  ghost2.addImage(ghost22);
  ghost2.scale = 0.2
  a = createSprite(80,209,15,350)
  b = createSprite(724,205,15,350)
  c = createSprite(274,106,15,150)
  d = createSprite(206,205,15,70)
  e = createSprite(402,138,15,80)
  f = createSprite(593,173,15,150)
  g = createSprite(658,201,15,75)
  h = createSprite(402,268,15,70)
  i = createSprite(530,265,15,70)
  j = createSprite(466,333,15,80)
  k = createSprite(336,330,15,75)
  l = createSprite(272,262,15,78)
  m = createSprite(147,139,15, 80)
  n = createSprite(465,204,15,80)
  o = createSprite(465,69,15,80)
  p = createSprite(334,201,15,75)
  q = createSprite(470,294,130,15)
 q1 = createSprite(528,237,130,15)
  r = createSprite(431,171,70,15)
  s = createSprite(593,106,140,15)
  t = createSprite(529,133,15,70)
  u = createSprite(239,170,190,15)
  v = createSprite(380,375,590,15)
  w = createSprite(420,37,599,15)
  x = createSprite(656,301,120,15)
  y = createSprite(304,231,50,15)
  z = createSprite(689,169,60,15)
  a1 = createSprite(365,106,60,15)
  a2 = createSprite(212,293,140,15)
  a3 = createSprite(114,235,70,15)
  a4 = createSprite(178,105,70,15)
  a6 = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,a1,a2,a3,a4,q1]
}

function draw() {
  background("white"); 
   fill("black")
   textSize(25)
  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY)
  player();
  for(var i=0; i<=30; i++){
    player1.collide(a6[i])
  }
  coins();


}
function coins(){
  for(var i=485; i<=665; i=i+15){
    var c = createSprite(i,340,5,5)
  }
 for (var i=560; i<=700; i=i+15){
   var a = createSprite(i,262,5,5)
 }
 
for (var i= 200; i<=260; i=i+15){
  var d = createSprite(694,i,5,5)}

 for (var i=270; i<=325; i=i+15){
    var b = createSprite(560,i,5,5)
  } 
  for (var i=128; i<=242; i=i+15){
    var a = createSprite(620,i,5,5)
  } 
  for (var i=65; i<=137; i=i+15){
    var q= createSprite(694,i,5,5)
  } 
  for (var i=620; i<=694; i=i+15){
    var r = createSprite(i,141,5,5)
  } 
  for (var i=495; i<=693; i=i+15){
    var g = createSprite(i,79,5,5)
  } 
  for (var i=78; i<=204; i=i+15){
    var b = createSprite(493,i,5,5)
  }
  for (var i=492; i<=567; i=i+15){
    var b = createSprite(i,197,5,5)

  } 
  for (var i=120; i<=196; i=i+15){
    var b = createSprite(566,i,5,5)
  } 
  for (var i=424; i<=492; i=i+15){
    var b = createSprite(i,135,5,5)

  }
  for (var i=73; i<=134; i=i+15){
    var b = createSprite(421,i,5,5)

  }  
  
  for (var i=308; i<=420; i=i+15){
    var b = createSprite(i,72,5,5)

  }  
  for (var i=71; i<=136; i=i+15){
    var b = createSprite(305,i,5,5)

  } 
  for (var i=304; i<=368; i=i+15){
    var b = createSprite(i,129,5,5)

  } 
  for (var i=128; i<=208; i=i+15){
    var b = createSprite(361,i,5,5)

  } 
  for (var i=360; i<=436; i=i+15){
    var b = createSprite(i,202,5,5)

  } 
  for (var i=200; i<=268; i=i+15){
    var b = createSprite(433,i,5,5)

  } 
  for (var i=431; i<=507; i=i+15){
    var b = createSprite(i,259,5,5)

  } 
  for (var i=201; i<=346; i=i+15){
    var b = createSprite(361,i,5,5)

  } 
  for (var i=361; i<=441; i=i+15){
    var b = createSprite(i,335,5,5)

  } 
  for (var i=290; i<=360; i=i+15){
    var b = createSprite(i,260,5,5)

  } 
  for (var i=258; i<=340; i=i+15){
    var b = createSprite(290,i,5,5)

  } 
  for (var i=100; i<=288; i=i+15){
    var b = createSprite(i,330,5,5)

  } 
  for (var i=255; i<=327; i=i+15){
    var b = createSprite(99,i,5,5)

  } 
  for (var i=99; i<=246; i=i+15){
    var b = createSprite(i,255,5,5)

  } 
  for (var i=195; i<=252; i=i+15){
    var b = createSprite(172,i,5,5)

  } 
  for (var i=191; i<=254; i=i+15){
    var b = createSprite(233,i,5,5)

  } 
  for (var i=232; i<=315; i=i+15){
    var b = createSprite(i,189,5,5)

  } 
  for (var i=100; i<=169; i=i+15){
    var b = createSprite(i,192,5,5)

  } 
  for (var i=59; i<=192; i=i+15){
    var b = createSprite(99,i,5,5)

  } 
  for (var i=99; i<=240; i=i+15){
    var b = createSprite(i,52,5,5)

  }
  for (var i=53; i<=130; i=i+15){
    var b = createSprite(235,i,5,5)

  } 
  for (var i=163; i<=233; i=i+15){
    var b = createSprite(i,127,5,5)

  } 
}
function player(){
  
  if(keyWentDown("up")){
    player1.velocityY = -3}

  if(keyWentDown("down")){
    player1.velocityY = 3
  }
  if(keyWentUp("down") || (keyWentUp("up"))){
    player1.velocityY = 0 
  }
  if(keyWentDown("right")){
    player1.velocityX= 4
  }
  if (keyWentDown("left")){
    player1.velocityX = -4
  }
  if(keyWentUp("right")|| (keyWentUp("left"))){
    player1.velocityX = 0
  }

  
  
}