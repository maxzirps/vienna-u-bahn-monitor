const stations = require("../../data/stations.json");
const drawStations = require("./draw-stations");
const drawConnections = require("./draw-connections");

const elem = document.getElementById("graph");
const params = { width: elem.offsetWidth, height: elem.offsetHeight };
const original = { width: 940, height: 600 };
let scalingX = params.width / original.width;
let scalingY = params.height / original.height;
const two = new Two(params).appendTo(elem);

draw(two, scalingX, scalingY);

function draw(two, scalingX, scalingY) {
  // all stations need to be drawn after all connections have been drawn,
  // so that the stations are a layer above the connections
  const drawTasks = [[], []];
  Object.keys(stations).forEach((line) => {
    const scaledStations = [];
    stations[line].forEach((station) => {
      const x = station.x * scalingX;
      const y = station.y * scalingY;
      scaledStations.push({
        x,
        y,
        name: station.name,
        label: station.label,
        rbl: station.rbl,
      });
    });

    drawTasks[0].push(() => drawConnections(two, scaledStations, line));
    drawTasks[1].push(() => drawStations(two, scaledStations));
  });
  drawTasks[0].forEach((task) => task());
  drawTasks[1].forEach((task) => task());
  two.update();
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
