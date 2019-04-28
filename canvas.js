let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.fillStyle = "white";
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fill();
    c.strokeStyle = "white";
    c.stroke();
  };

  this.update = function() {
    if(this.x + this.radius > innerWidth) {
      this.x = 0;
    }
    
    if(this.y + this.radius > innerHeight) {
        this.y = 0;
    }
  
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

let circleArray = [];
for (let i = 0; i < 1000; i++) {
  let radius = 1;
  let x = Math.random() * innerWidth + (radius * 2);
  let y = Math.random() * innerHeight + (radius * 2);
  let dx = (Math.random()) * 1;
  let dy = (Math.random()) * 1;
  

  circleArray.push(new Circle(x,y,dx,dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].draw();
    circleArray[i].update();
  }
}

animate();