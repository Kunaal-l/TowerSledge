class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.pointB = pointB
    
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
       // line(bodyA.x ,pointA.y, pointB.x , pointB.y);
        
    }
  
    

    display(){
        
        
       
        if(this.sling.bodyA){
          
            var pointA = this.sling.bodyA.position;
           
         
        }




    }
    
}