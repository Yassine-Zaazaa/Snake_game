function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
  
    this.draw = function () {
    ctx.fillStyle = "blue"
    for ( let i =0; i<this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale)
    }
    ctx.fillRect(this.x, this.y, scale, scale);
    };
  
    this.update = function () {
      for (let i=0; i<this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i+1];
      }
  
      this.tail[this.total - 1] = { x: this.x, y: this.y};
  
      this.x += this.xSpeed;
      this.y += this.ySpeed;
  
      if(this.x > canvas.width) {
        this.x = 0;
      }
      if(this.y > canvas.height) {
        this.y = 0;
      }
      if(this.x < 0) {
        this.x = canvas.width;
      }
      if(this.y < 0) {
        this.y = canvas .height;
      }
      var a = 0;
      var b = 0;
      if(snake.x == 570 && snake.y == 0) {
        snake.changeDirection("Down")
      }
      if(snake.x == canvas.width && snake.y == canvas.height){
        snake.changeDirection("Left")
      }
      var values_x = [0, 0.05, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 0.95, 1]
      for(let i = 0; i < values_x.length; i++) {
        if((snake.x + scale) / canvas.width == values_x[i] && snake.y == canvas.height) {
           a = 1;
        }
      }
      if(a = 1 && snake.y == canvas.height) {
        snake.changeDirection("Up")
      }
      if(a = 1 && snake.y == scale && snake.x != 0) {
        snake.changeDirection("Left")
      }
      var values_x_2 = [0.1, 0.2, 0.3, 0.4, 0.5,0.6, 0.7, 0.8, 0.9, 1]
      for(let i = 0; i < values_x_2.length; i++) {
        if((snake.x + scale) / canvas.width == values_x_2[i]) {
          b = 1
        }
      }
      if(snake.y == scale && b==1) {
        snake.changeDirection("Down")
      }
      if(snake.y == canvas.height && b == 1) {
        snake.changeDirection("Left")
      }
      if(snake.x == 0 && snake.y == 0) {
        snake.changeDirection("Right")
      }
    };
  
    this.changeDirection = function(direction) {
      switch(direction) {
        case 'Up' :
          this.xSpeed = 0;
          this.ySpeed = -scale * 1;
          break
        case 'Down' :
          this.xSpeed = 0;
          this.ySpeed = scale * 1;
          break
        case 'Right' :
          this.xSpeed = scale * 1;
          this.ySpeed = 0;
          break;
        case 'Left' :
          this.xSpeed = -scale * 1;
          this.ySpeed = 0; 
          break;
    }
  }
  
  this.eat = function(fruit) {
    if (fruit.x === this.x && fruit.y === this.y) {
      this.total++;
      return true;
    }
    return false;
  }
  
  this.die = function() {
    for(let i = 0; i < this.tail.length; i++) {
        if(this.x === this.tail[i]["x"] && this.y === this.tail[i]["y"]) {
          console.log(this.tail);
          if(confirm("You lost. Press ok to restart")) {
            window.location = "AI.html"
          }
          return 
        }
    }
    return false;
  }
  }
  