    var fixedRect, movingRect;
    var car,wall;

    function setup() {
      createCanvas(1200,800);
      fixedRect = createSprite(600, 400, 50, 80);
      fixedRect.shapeColor = "green";
      fixedRect.debug = true;
      movingRect = createSprite(400,200,80,30);
      movingRect.shapeColor = "green";
      movingRect.debug = true;

      car= createSprite(100,200,30,40);
      car.shapeColor="red";
      car.velocityX=4;

      wall= createSprite(600,200,20,80);
      wall.shapeColor="grey";
    }

    function draw() {
      background(0,0,0);  
      movingRect.x = World.mouseX;
      movingRect.y = World.mouseY;

      if(is_Touching(car,wall)){
        car.shapeColor="yellow";
        textSize(30);
        fill("white");
        text("TOUCHED!!",200,200);
      }
     bounceOff(car,wall);
      drawSprites();
    }
    