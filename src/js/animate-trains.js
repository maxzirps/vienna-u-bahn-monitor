const stationNamesMap = require("../../data/station-names-map.json");

function animateTrain(two, from, to, time) {
  const circle = two.makeCircle(from.x, from.y, 3);
  circle.fill = "#fff";
  circle.stroke = "#000";
  circle.linewidth = 1;

  function moveCloser(from, to, xStep, yStep, speed) {
    const xMatch = from.x - xStep < to.x && from.x + xStep > to.x;
    const yMatch = from.y - yStep < to.y && from.y + yStep > to.y;
    if (!xMatch || !yMatch) {
      const nextXStep = xMatch ? 0 : to.x > from.x ? xStep : -xStep;
      const nextYStep = yMatch ? 0 : to.y > from.y ? yStep : -yStep;
      from.x += nextXStep;
      from.y += nextYStep;
      circle.translation.set(from.x, from.y);
      two.update();
      setTimeout(() => moveCloser(from, to, xStep, yStep, speed), speed);
    }
  }

  const xDistance = Math.abs(from.x - to.x);
  const yDistance = Math.abs(from.y - to.y);
  const speed = 100;
  const xStep = (xDistance / time) * speed;
  const yStep = (yDistance / time) * speed;
  moveCloser({ ...from }, { ...to }, xStep, yStep, speed);
}

function animateLine(lineData, stations) {
  const lineName = lineData[0].lines[0].name.toLowerCase();

  lineData.forEach((entry) => {
    const apiStopName = entry.locationStop.properties.title;
    const apiTowards = entry.lines[entry.lines.length - 1];
    const from = stations[lineName].find(
      (station) => 
        stationNamesMap[station.name] === apiStopName 
    );
    const to = from && getNextStation(from, apiTowards, stations[lineName])
    console.log(to)
  });
}

function getNextStation(from, towards, stations) {
  if (stationNamesMap[stations[0].name].toUpperCase() === towards) {
    // TODO: take lower 
  } else if (stationNamesMap[stations[stations.length-1].name].toUpperCase() === towards){
    // TODO: take higher station
  }
}

function startTrainAnimations(two, stations) {
  Promise.all(
    Object.keys(stations).map((line) =>
      fetch(
        `https://apps.static-access.net/ViennaTransport/monitor/?line=${line}`
      )
        .then((res) => res.json())
        .catch((e) => console.error(e.message))
    )
  ).then((res) =>
    res.forEach((lineData) => animateLine(lineData.data.monitors, stations))
  );
}

module.exports = startTrainAnimations;
