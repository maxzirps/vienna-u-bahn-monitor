// 920x580 pixels -> scale to current when drawing
const stations = require("./stations.json");

var elem = document.getElementById("graph");
var params = { width: elem.offsetWidth, height: elem.offsetHeight };
var original = { width: 920, height: 580 };
const scalingX = params.width / original.width;
const scalingY = params.height / original.height;
var two = new Two(params).appendTo(elem);

const circles = {};

Object.keys(stations).forEach((line, i) => {
  const circlesOfStation = []
  const XY = []
  stations[line].forEach((station, z) => {
    const x = station.x * scalingX;
    const y = station.y * scalingY;
    XY.push({x, y, name: station.name})
  });
  for(let i = 0; i < XY.length-1; i++) {
    const connection = two.makeLine(XY[i].x, XY[i].y, XY[i+1].x, XY[i+1].y)
    connection.stroke = getColorForLine(line)
    connection.linewidth = 5
    connection.curved = true
  }
  XY.forEach((station) => { const circle = two.makeCircle(station.x, station.y, 5)
    circle.fill = "#fff";
    circle.stroke = "#000";
    circle.linewidth = 1;
    const text = two.makeText(station.name, station.x, station.y-20)
    text.rotation = 5.2
  })
});
// two has convenience methods to create shapes.
// var circle = two.makeCircle(500, 100, 30);

// The object returned has many stylable properties:
// circle.fill = "#FF8000";
// circle.stroke = "orangered"; // Accepts all valid css color
// circle.linewidth = 5;

// Don't forget to tell two to render everything
// to the screen
two.update();

function getColorForLine(line) {
  switch (line) {
    case "u1":
      return "#f00";
      break;
    case "u2":
      return "#986aae";
      break;
    case "u3":
      return "#ff9a00";
      break;
    case "u4":
      return "#008b3b";
      break;
    case "u6":
      return "#a53505";
      break;
    default:
      return "#cecece";
  }
}
