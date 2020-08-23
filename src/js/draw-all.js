const drawStations = require("./draw-stations");
const drawConnections = require("./draw-connections");
const startTrainAnimations = require("./animate-trains");

function draw(two, scaledStations) {
  two.clear();

  Object.keys(scaledStations).forEach((line) =>
    drawConnections(two, scaledStations[line], line)
  );
  Object.keys(scaledStations).forEach((line) =>
    drawStations(two, scaledStations[line])
  );
  two.update();
}

module.exports = draw;
