const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var ground  
 var div1 , div2 , div3, div4 , div5
var divisionHeight = 300;


function preload() {
  
}

var particles = []
var plinkos=[]
var divisions = []


function setup(){
    var canvas = createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (100 , 780 , 800 , 20)

    div1 = new Division(100 , 620 , 10,300 )
    div2 = new Division(200 , 620 , 10,300 )
    div3 = new Division(300 , 620 , 10,300 )
    div4 = new Division(400 , 620 , 10,300 )

}
 
function draw(){
    background(0)
    Engine.update(engine);
   
ground.display()
div1.display()
div2.display()
div3.display()
div4.display()

}
