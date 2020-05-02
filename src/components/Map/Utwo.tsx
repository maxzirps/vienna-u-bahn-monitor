import React, { FunctionComponent } from "react";

const Utwo: FunctionComponent<{ activeStations: string[] }> = ({
  activeStations,
}: {
  activeStations: string[];
}) => (
  <polyline
    points="1047,312 991,365 928,335 815,455 685,332 545,332 450,418 450,481 495,520 536,520"
    style={{ fill: "none", stroke: "violet", strokeWidth: "15" }}
    id="u2"
  />
);

export default Utwo;
