const stations = require("../../data/stations.json");
const drawStations = require("./draw-stations");
const drawConnections = require("./draw-connections");
const startTrainAnimations = require("./animate-trains");

const elem = document.getElementById("graph");
const params = { width: elem.offsetWidth, height: elem.offsetHeight };
const original = { width: 940, height: 600 };
let scalingX = params.width / original.width;
let scalingY = params.height / original.height;
const two = new Two(params).appendTo(elem);

draw(two, scalingX, scalingY);

function draw(two, scalingX, scalingY) {
  const scaledStations = {};

  Object.keys(stations).forEach((line) => {
    scaledStations[line] = [];
    stations[line].forEach((station) => {
      const x = station.x * scalingX;
      const y = station.y * scalingY;
      scaledStations[line].push({
        x,
        y,
        name: station.name,
        label: station.label,
        rbl: station.rbl,
      });
    });
  });
  Object.keys(scaledStations).forEach((line) => drawConnections(two, scaledStations[line], line))
  Object.keys(scaledStations).forEach((line) => drawStations(two, scaledStations[line]))
  two.update();
  startTrainAnimations(two, scaledStations);
}

function resize() {
  // TODO: bounce
  two.renderer.setSize(elem.offsetWidth, elem.offsetHeight);
  const scaling = {
    x: elem.offsetWidth / original.width,
    y: elem.offsetHeight / original.height,
  };
  two.clear();
  draw(two, scaling.x, scaling.y);
  two.update();
}

window.addEventListener("resize", resize);
