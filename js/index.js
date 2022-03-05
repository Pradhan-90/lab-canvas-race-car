const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d');
const img = new Image();
img.src = ('./images/road.png')
const carImg = new Image();
 carImg.src = ('./images/car.png')
 let carCurrentPost = 185 
 
class Obstacle {
  constructor() {
    this.x = this.get_x()
    this.y = 100
    this.height = 15
    this.width = this.x * 0.4
  }
  get_x() {
    let value = 0
    while (value < 100 || value > 250) {
      value = Math.random() * canvas.width
    }
    return value
  }
  update(num) {
    this.y -= num;
    context.fillStyle = "red";
    context.fillRect(this.x, this.y, this.width, this.height)
  }
  reset() {
    this.x = this.get_x()
    this.y = 100
    this.width = this.x * 0.4
  }
}

let obstacles = [new Obstacle()];

 window.onload = () => {
   document.getElementById('start-button').onclick = () => {
     startGame();
    };
    
    function startGame() {
      context.drawImage(img , 70, 40);
      context.drawImage(carImg , 185, 200, 55, 90);
      setInterval(moveObstacle, 100)
  }

  document.addEventListener('keydown', function (event){
    console.log(event.key)
    switch(event.key){
       case'ArrowRight':
       moveCar(5)
       break
       case 'ArrowLeft':
       moveCar(-5)
       break
    }
  })

  function moveCar(num) {
    carCurrentPost += num
    context.clearRect(0, 0, 700, 500)
    context.drawImage(img , 70, 40);
    context.drawImage(carImg , carCurrentPost, 200, 55, 90)
  }

  function moveObstacle() {
    context.clearRect(0, 0, 700, 500)
    context.drawImage(img , 70, 40);
    context.drawImage(carImg , carCurrentPost, 200, 55, 90);

    obstacles.forEach((obstacle) => {
      if (obstacle.y < 450) {
        obstacle.update(-5)
      } else {
        obstacle.reset()
      }
    })
    if (obstacles.length === 1 && obstacles[0].y === 300) {
        obstacles.push(new Obstacle())
    }
    
  }
}