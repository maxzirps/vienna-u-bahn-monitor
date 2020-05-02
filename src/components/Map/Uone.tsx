import React, { FunctionComponent } from "react";

const Uone: FunctionComponent<{ activeStations: string[] }> = ({
  activeStations,
}: {
  activeStations: string[];
}) => (
  <polyline
    points="612,744 535,666 535,440 850,125"
    style={{ fill: "none", stroke: "red", strokeWidth: "15" }}
    id="u1"
  />
);

export default Uone;
