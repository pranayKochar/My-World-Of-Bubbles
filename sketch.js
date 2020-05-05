
var bubbles = []
  
function setup() {
 createCanvas(600,400);
    
  bubble1 = new Bubble();
  bubble2 = new Bubble();                     
  bubble3 = new Bubble();
  bubble4 = new Bubble();
  bubble5 = new Bubble();
  bubble6 = new Bubble();  
  bubble7 = new Bubble();
  bubble8 = new Bubble();
  bubble9 = new Bubble();
  bubble10 = new Bubble();
}

function draw() {
  background(51);
  
  bubble1.color = "blue";
  bubble2.color = "pink";
  bubble3.color = "green";
  bubble4.color = "yellow";
  bubble5.color = "red";
  bubble6.color = "orange";
  bubble7.color = "violet";
  bubble8.color = "brown";
  bubble9.color = "purple";
  bubble10.color = "white";
  
  bubble1.velocityX = -2;
  bubble1.velocityY = 3;
  
  bubble2.velocityX = 2;
  bubble2.velocityY = -3;
  
  bubble3.velocityX = -2;
  bubble3.velocityY = 3;
  
  bubble4.velocityX = 2;
  bubble4.velocityY = -3;
  
  bubble5.velocityX = -2;
  bubble5.velocityY = 3;
  
  bubble6.velocityX = 2;
  bubble6.velocityY = -3;
  
  bubble7.velocityX = -2;
  bubble7.velocityY = 3;
  
  bubble8.velocityX = 2;
  bubble8.velocityY = -3;
  
  bubble9.velocityX = -2;
  bubble9.velocityY = 3;
  
  bubble10.velocityX = 2;
  bubble10.velocityY = -3;
  
  
  bubble1.move();
  bubble2.move();
  bubble3.move();
  bubble4.move();
  bubble5.move();
  bubble6.move();
  bubble7.move();
  bubble8.move();
  bubble9.move();
  bubble10.move();
  
  bubble1.display();
  bubble2.display();
  bubble3.display();
  bubble4.display();
  bubble5.display();
  bubble6.display();
  bubble7.display();
  bubble8.display();
  bubble9.display();
  bubble10.display();
  

  
}