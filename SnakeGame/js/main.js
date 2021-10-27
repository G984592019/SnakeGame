ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2, canv.height/2, 20, 20);
setInterval(function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.fillStyle = color;
  px += xd;
  py += yd;
  snake.push({x:px, y:py});
  for(let i=0; i<snake.length-1; i++) {
    ctx.fillRect(snake[i].x*SIZE, snake[i].y*SIZE, SIZE-2, SIZE-2);
    if(snake[i].x == px && snake[i].y == py) {
      tail = MIN;
      //console.log("crash");
    }
  }
  while(snake.length>tail) {
    snake.shift();
  }
  if(apple1X == px && apple1Y == py) {
    tail++;
    color = "red";
    apple1X = Math.floor(Math.random()*canv.width/SIZE);
    apple1Y = Math.floor(Math.random()*canv.height/SIZE);
    if(snake.length>=7) {
      console.log("clear");
    }
  }
  ctx.fillStyle = "red";
  ctx.fillRect(apple1X*SIZE, apple1Y*SIZE, SIZE-2, SIZE-2);
  if(apple2X == px && apple2Y == py) {
    tail--;
    color = "blue";
    apple2X = Math.floor(Math.random()*canv.width/SIZE);
    apple2Y = Math.floor(Math.random()*canv.height/SIZE);
    if(snake.length<=3) {
      console.log("GameOver");
    }
  }
  ctx.fillStyle = "blue";
  ctx.fillRect(apple2X*SIZE, apple2Y*SIZE, SIZE-2, SIZE-2);
  if(apple0X == px && apple0Y == py) {
    color = "pink";
    apple0X = Math.floor(Math.random()*canv.width/SIZE);
    apple0Y = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "pink";
  ctx.fillRect(apple0X*SIZE, apple0Y*SIZE, SIZE-2, SIZE-2);
}, 3500/FPS);
