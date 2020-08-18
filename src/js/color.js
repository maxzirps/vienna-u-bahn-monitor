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

module.exports = getColorForLine;
