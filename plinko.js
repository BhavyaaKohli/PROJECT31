class Plinko  {
    constructor(x, y, r) {
        var options = {
            isStatic : true,
            'restitution':0,
            'friction':1,
            'density':1.2,
          
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(this.x,this.y, this.r,options);
       
        World.add(world,this.body);
    }
    
    for (var j = 40; j <= width; j = j+50)
    {

        plinkos.push(new Plinko (j ,75));
    }

    for (var j = 15; j <= width-10; j = j+50)
    {

     plinkos.push(new Plinko(j,175))
    }
    display()
    {
        var pos = this.body.position
        

        push()
        translate(pos.x,pos.y)
        strokeWeight(3)
        fill("255,0,255")
        ellipseMode(RADIUS);
        ellipse(0,0,this.r, this.r)
        pop()



    }

}