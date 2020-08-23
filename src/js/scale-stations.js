function scaleStations(stations, scalingX, scalingY) {
  const scaledStations = {};
  Object.keys(stations).forEach((line) => {
    scaledStations[line] = [];
    stations[line].forEach((station) => {
      const x = station.x * scalingX;
      const y = station.y * scalingY;
      scaledStations[line].push({
        ...station,
        x,
        y,
      });
    });
  });
  return scaledStations;
}

module.exports = scaleStations;
