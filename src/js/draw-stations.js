function drawStations(two, stations) {
  stations.forEach((station) => {
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
}

module.exports = drawStations;
