class Paper{
    constructor(x,y,r){
        var options = {
            restitution : 0.8,
            friction : 0.3,
            density : 1.2
        }
      
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        
        World.add(world,this.body);



    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        fill("pink");
        ellipse(pos.x,pos.y,2*this.r,2*this.r);
        pop();

    }
}