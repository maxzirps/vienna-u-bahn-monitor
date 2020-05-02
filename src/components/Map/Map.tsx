import React, { FunctionComponent } from "react";
import Usix from "./Usix";
import Uone from "./Uone";
import Utwo from "./Utwo";
import Uthree from "./Uthree";
import Ufour from "./Ufour";

const Map: FunctionComponent<{ activeStations: string[] }> = ({
  activeStations,
}: {
  activeStations: string[];
}) => (
  <div id="map-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1200 800">
      <Uone activeStations={activeStations} />
      <Utwo activeStations={activeStations} />
      <Uthree activeStations={activeStations} />
      <Ufour activeStations={activeStations} />
      <Usix activeStations={activeStations} />
    </svg>
  </div>
);

export default Map;
