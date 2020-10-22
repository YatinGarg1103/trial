class Ground {
    constructor(x,y,width,height) {
  var po = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,po);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var op =this.body.position;
      rectMode(CENTER);
    
      rect(op.x, op.y, this.width, this.height);
    }
  }