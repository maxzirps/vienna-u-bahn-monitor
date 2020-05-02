import React, { FunctionComponent } from "react";
import map from "./underground.svg";

const Map: FunctionComponent = () => (
  <div id="map-wrapper">
    <img src={map} alt="underground map" />
  </div>
);

export default Map;
