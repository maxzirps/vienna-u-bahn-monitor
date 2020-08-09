const stations = require("./stations.json");

const elem = document.getElementById("graph");
const params = { width: elem.offsetWidth, height: elem.offsetHeight };
const original = { width: 920, height: 580 };
let scalingX = params.width / original.width;
let scalingY = params.height / original.height;
const two = new Two(params).appendTo(elem);

function draw(scalingX, scalingY) {
  Object.keys(stations).forEach((line, i) => {
    const circlesOfStation = [];
    const XY = [];
    stations[line].forEach((station, z) => {
      const x = station.x * scalingX;
      const y = station.y * scalingY;
      XY.push({ x, y, name: station.name, label: station.label });
    });
    for (let i = 0; i < XY.length - 1; i++) {
      const connection = two.makeLine(
        XY[i].x,
        XY[i].y,
        XY[i + 1].x,
        XY[i + 1].y
      );
      connection.stroke = getColorForLine(line);
      connection.linewidth = 5;
      connection.curved = true;
    }
    XY.forEach((station) => {
      const circle = two.makeCircle(station.x, station.y, 5);
      circle.fill = "#fff";
      circle.stroke = "#000";
      circle.linewidth = 1;
      if (station.label)
        two.makeText(
          station.label.text,
          station.x + station.label.x,
          station.y + station.label.y
        ).rotation = station.label.rotation;
    });
  });
}

draw(scalingX, scalingY);

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

function resize() {
  // TODO: bounce
  two.renderer.setSize(elem.offsetWidth, elem.offsetHeight);
  const scaling = {
    x: elem.offsetWidth / original.width,
    y: elem.offsetHeight / original.height,
  };
  two.clear();
  draw(scaling.x, scaling.y);
  two.update();
}

window.addEventListener("resize", resize);
