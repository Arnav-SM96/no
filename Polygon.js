class Polygon {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("polygon.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      //var pos =this.body.position;
      //rectMode(CENTER);
      //fill("green");
     // rect(pos.x, pos.y, this.width, this.height);
     var angle = this.body.angle;
     push();
     translate(this.body.position.x, this.body.position.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.image, 0, 0, this.width, this.height);
     pop();
    }
  };