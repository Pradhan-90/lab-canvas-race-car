const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d');
const img = new Image();
img.src = ('./images/road.png')
const carImg = new Image();
 carImg.src = ('./images/car.png')
 let carCurrentPost = 185
 let obstacleCurrentPost = 80

 
 
 
 window.onload = () => {
   document.getElementById('start-button').onclick = () => {
     startGame();
    };
    
    function startGame() {
      context.drawImage(img , 70, 40);
      context.drawImage(carImg , 185, 200, 55, 90);
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
    createObstacles(0)
  }

  function createObstacles(num) {
    obstacleCurrentPost -= num;
    context.fillStyle = "red";
    context.fillRect(100, obstacleCurrentPost, 50, 15)
  }

  function moveObstacle() {
    context.clearRect(0, 0, 700, 500)
    context.drawImage(img , 70, 40);
    context.drawImage(carImg , carCurrentPost, 200, 55, 90);
    if (obstacleCurrentPost < 400) {
      createObstacles(-5)
      console.log(obstacleCurrentPost) 
    }
    
    
  }
  setInterval(moveObstacle, 100)

   
}