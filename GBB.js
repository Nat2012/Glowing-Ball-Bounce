let container = document.getElementById("container");
let ballcounter = document.getElementById("ballcounter").innerHTML;
let ballCount = 0;

container.addEventListener("mousedown", function spawnBall() {
  ballCount = ballCount + 1;
  document.getElementById("ballcounter").innerHTML = "Ball Count: " + ballCount;
  let ball = document.createElement("div");
  ball.className = "ball";
  container.appendChild(ball);
  let x = Math.floor(Math.random() * (450 - 1 + 1)) + 1;
  let y = Math.floor(Math.random() * (450 - 1 + 1)) + 1;
  ball.style.left = x + "px";
  ball.style.top = y + "px";
  let colours = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
  let randomColour = colours[Math.floor(Math.random() * colours.length)];
  console.log();
  ball.style.backgroundColor = randomColour;
  ball.style.boxShadow = "0 0 20px " + randomColour;
  console.log(
    "Ball spawned at: " +
      x +
      ", " +
      y +
      " " +
      "With the colour: " +
      randomColour
  );
});
