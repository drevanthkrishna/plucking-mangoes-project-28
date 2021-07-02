class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.004,
            length: 1
        }
        this.launcherObject = Constraint.create(options);
        World.add(world, this.launcherObject);
        this.pointB=pointB;
    }

    display(){
      if(this.launcherObject.bodyA){
        var pointA = this.launcherObject.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

      }
       
        
    }
    fly(){
this.launcherObject.bodyA=null;

        
    }
}