class Bob {
    constructor(x,y,radius){
        var options = {
            restitution:0.5,
            isStatic:true,
        
            friction:0.5,
            density:1.2
        }
        this.Body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
    
       World.add(world,this.Body);
    
    
    
    
    }
    display(){
        var pos = this.Body.position;
        fill ("purple");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
    }
    
    
    
    
    
    
    
    }
    