function animate(two, from, to, time) {
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

function startTrainAnimations(two, stations) {
  Object.keys(stations).forEach((line) => {
    stations[line].forEach((station) => {
      station.rbl.forEach((rbl) => {
        // fetch(
        //   `https://apps.static-access.net/ViennaTransport/monitor/?line=${line}&station=${station.name}&towards=${rbl.towards}`
        // )
        //   .then((res) => res.json())
        //   .then((data) =>
        //     console.log(
        //       data.data.monitors[0].lines[0].departures.departure[0]
        //         .departureTime.timeReal
        //     )
        //   )
        //   .catch((e) => console.error(e.message));
      });
    });
  });
}

module.exports = startTrainAnimations;
