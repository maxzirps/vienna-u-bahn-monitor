import "./index.css";
import * as d3 from "d3";
const stationNames = require("./stationNames.json");
const data = {
  links: [],
  nodes: [],
};

Object.keys(stationNames).forEach((line, i) => {
  stationNames[line].forEach((station, x) => {
    data.nodes.push({
      name: station,
      id: parseInt(line.substr(1)) * 100 + x,
    });
    x > 0 &&
      data.links.push({
        source: parseInt(line.substr(1)) * 100 + x - 1,
        target: parseInt(line.substr(1)) * 100 + x,
      });
  });
});

// add intersection links
const allStationNames = data.nodes.map((node) => node.name);
const intersections = allStationNames.filter(
  (item, index) => allStationNames.indexOf(item) != index
);
intersections.forEach((intersection) => {
  const intersectionNodes = data.nodes.filter(
    (node) => node.name === intersection
  );
  for (let i = 0; i < intersectionNodes.length - 1; i++) {
    data.links.push({
      source: intersectionNodes[i].id,
      target: intersectionNodes[i + 1].id,
    });
  }
});
const rootDiv = document.getElementById("root");
const height = rootDiv.clientHeight*1.5;
const width =  rootDiv.clientWidth*1.5;
const color = (d) => {
  switch (true) {
    case d.id < 200:
      // U1
      return "red";
      break;
    case d.id < 300:
      // U2
      return "purple";
      break;
    case d.id < 400:
      // U3
      return "orange";
      break;
    case d.id < 500:
      // U4
      return "green";
      break;
    case d.id < 700:
      // U6
      return "brown";
      break;
    default:
      return "#1f77b4";
  }
};

const links = data.links.map((d) => Object.create(d));
const nodes = data.nodes.map((d) => Object.create(d));

const simulation = d3
  .forceSimulation(nodes)
  .force(
    "link",
    d3.forceLink(links).id((d) => d.id)
  )
  .force("charge", d3.forceManyBody())
  .force("center", d3.forceCenter(width / 2, height / 2));


const svg = d3.create("svg").attr("viewBox", [0, 0, width, height]);

const link = svg
  .append("g")
  .attr("stroke", "#999")
  .attr("stroke-opacity", 0.6)
  .selectAll("line")
  .data(links)
  .join("line")
  .attr("stroke-width", (d) => Math.sqrt(d.value));

const node = svg
  .append("g")
  .attr("stroke", "#fff")
  .attr("stroke-width", 1.5)
  .selectAll("circle")
  .data(nodes)
  .join("circle")
  .attr("r", 5)
  .attr("fill", color);

simulation.on("tick", () => {
  link
    .attr("x1", (d) => d.source.x)
    .attr("y1", (d) => d.source.y)
    .attr("x2", (d) => d.target.x)
    .attr("y2", (d) => d.target.y);

  node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
});


d3.select("#root").append(() => svg.node());
