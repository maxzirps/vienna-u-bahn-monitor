import React, { FunctionComponent } from "react";

const Uthree: FunctionComponent<{ activeStations: string[] }> = ({
  activeStations,
}: {
  activeStations: string[];
}) => (
  <polyline
    points="230,338 350,450 650,450 765,565 765,650"
    style={{ fill: "none", stroke: "orange", strokeWidth: "15" }}
    id="u3"
  />
);

export default Uthree;
