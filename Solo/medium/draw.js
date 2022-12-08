const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scale = 30;
const rows = canvas.height / scale;
const cols = canvas.width / scale;
var snake;

(function setup() {
  snake = new Snake();
  fruit = new Fruit();

  fruit.pickLocation();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    fruit.draw();
    snake.update();
    snake.draw();

    if(snake.eat(fruit)) {
      fruit.pickLocation();
    }
    if(snake.die()) {
      alert("You lost!");
    }
  }, 100);
}());

window.addEventListener('keydown', ((evt) => {
  console.log(evt);
  const direction = evt.key.replace('Arrow', '');
  snake.changeDirection(direction);
}))
