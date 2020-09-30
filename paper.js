class Paper {
    constructor() {
      var options ={
        isStatic:false,
        'density':1.2,
        'resitution':0.3,
       'friction':1.0
      }
      this.body = Bodies.circle(56, 690, 55,options);
      World.add(world, this.body);
    }
    display(){
      fill("indigo");
      ellipse(this.body.position.x, this.body.position.y,55, 55);
    }
  
  }
