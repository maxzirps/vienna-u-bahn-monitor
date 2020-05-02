import React, { FunctionComponent } from "react";

const Ufour: FunctionComponent<{ activeStations: string[] }> = ({
  activeStations,
}: {
  activeStations: string[];
}) => (
  <polyline
    points="140,540 575,540 617,500 617,400 485,237 485,164"
    style={{ fill: "none", stroke: "green", strokeWidth: "15" }}
    id="u4"
  />
);

export default Ufour;
