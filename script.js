if (1=1) {
  1+1
};

var points = 0;
var prestigeState = false;

function pointClickFunction() {
  points += 1
  document.getElementById("points").innerHTML = "Points: " + points;
};
