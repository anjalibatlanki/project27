class Chain {

    constructor(body1,body2, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY= offsetY;
        var options = {
        bodyA: body1, //JSON - Javascript Object Notation
        bodyB: body2,
        pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.chain = Constraint.create(options);
        
        World.add(world,this.chain);
    }
    display(){
     
        var bodyA = this.chain.body1.position;
        var bodyB = this.chain.body2.position;
    push();
    stroke("white");    
    strokeWeight(3);
    line(bodyA.x,bodyA.y,bodyB.x, bodyB.y); //x1,y1(x,y of first point),x2,y2 (x,y of the second point)
    pop();
     
}
}