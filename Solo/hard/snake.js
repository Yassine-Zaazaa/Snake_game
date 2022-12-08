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
            window.location = "hard.html"
          }
          return 
        }
    }
    return false;
  }
  }
  