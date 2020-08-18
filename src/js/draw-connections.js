const drawStations = require("./draw-stations");

const getColorForLine = require("./color")

function drawConnections(two, stations, line) {
  for (let i = 0; i < stations.length - 1; i++) {
    const connection = two.makeLine(stations[i].x, stations[i].y, stations[i + 1].x, stations[i + 1].y);
    connection.stroke = getColorForLine(line);
    connection.linewidth = 5;
    connection.curved = true;
  }
}

module.exports = drawConnections