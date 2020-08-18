const stations = require("./stations.json");

const elem = document.getElementById("graph");
const params = { width: elem.offsetWidth, height: elem.offsetHeight };
const original = { width: 940, height: 600 };
let scalingX = params.width / original.width;
let scalingY = params.height / original.height;
const two = new Two(params).appendTo(elem);

function draw(scalingX, scalingY) {
  Object.keys(stations).forEach((line) => {
    // Scale station positions
    const XY = [];
    stations[line].forEach((station) => {
      const x = station.x * scalingX;
      const y = station.y * scalingY;
      XY.push({ x, y, name: station.name, label: station.label });
    });

    // Create connections
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

    // Create circles and labels
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

      animate(XY[0], XY[1], 5000);
  });
}

draw(scalingX, scalingY);

function animate(from, to, time) {
  const circle = two.makeCircle(from.x, from.y, 3);
  circle.fill = "#fff";
  circle.stroke = "#000";
  circle.linewidth = 1;

  function moveCloser(from, to, step, speed) {
    const xMatch = from.x -step < to.x && from.x+step > to.x;
    const yMatch = from.y -step < to.y && from.y+step > to.y;
    if (!xMatch || !yMatch) {
      const xStep = xMatch ? 0 : to.x > from.x ? step : -step;
      const yStep = yMatch ? 0 : to.y > from.y ? step : -step;
      from.x += xStep;
      from.y += yStep;
      circle.translation.set(from.x, from.y);
      two.update();
      setTimeout(() => moveCloser(from, to, step, speed), speed);
    }
  }

  const xDistance = Math.abs(from.x - to.x);
  const yDistance = Math.abs(from.y - to.y);
  const speed = 100;
  const step = (Math.max(xDistance, yDistance) / time) * speed;
  moveCloser({ ...from }, { ...to }, step, speed);
}

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
