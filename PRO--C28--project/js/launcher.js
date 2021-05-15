class launcher
{
    constructor (body, moor)
    {
       var options={ bodyA:body,
           pointB:moor,
           stiffness:0.002,
           length:2
    }

    this.bodyA=body
    this.pointB=moor
    this.launcher=Constraint.create(options)
    World.add(world,this.launcher)
    }

    attach(body)
    {
       this.launcher.bodyA=body;
    }

    fly()
    {
        this.launcher.bodyA=null;
    }

    display()
    {
        if(this.launcher.bodyA)
        {
            var pointA=this.bodyA.position;
            var pointB=this.pointB;

            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}