let flowers = [
    {
        name: "roses",
        color: "red"
  }, {
        name: "daisies",
        color: "white"
  }, {
        name: "dandelions",
        color: "yellow"
  }, {
        name: "violets",
        color: "blue"
  }, {
        name: "hyacinths",
        color: "purple"
  }, {
        name: "windflowers",
        color: "orange"
}];

let randomIndex;
animating = false;

function setup() {
      createCanvas(windowWidth/2, windowHeight/2);
      background(200);
      textSize(14);

      text("Click to Generate Flowers", width*.5, height*.5)

      setTimeout(changeBackground, 1000)
}

function draw(){
      if (animating == true){
            ellipse(random(width), random(height), random(50, 200))
      }
};

function randomizer(){
      animating = false;
      if (flowers[0]) {
            background(random(255), random(255), random(255));

            randomIndex = int(random(flowers.length));

            console.log(flowers[randomIndex].name);
            text(`${flowers[randomIndex].name} are ${flowers[randomIndex].color}`, width*.5, height*.5) ;
            
            flowers.splice(randomIndex, 1);
            console.log(flowers); 
      } else {
            background(random(200, 255));

            text("Congrats! You made a bouquet!", width*.5, height*.5);
      }
}

function changeBackground(){
      if (counter <= 5) {
            counter++;
      background(random(255), random(255), random(255))
      setTimeout(changeBackground, 1000);
} else {
      
}
}

function mousePressed(){
      animating = true;
      setTimeout(randomizer, 2000)
      }