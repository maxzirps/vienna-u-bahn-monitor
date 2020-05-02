import React, { FunctionComponent } from "react";

const Map: FunctionComponent<{ activeStations: string[] }> = ({
  activeStations,
}: {
  activeStations: string[];
}) => (
  <div id="map-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1200 800">
      <polyline
        points="612,744 535,666 535,440 850,125"
        style={{ fill: "none", stroke: "red", strokeWidth: "15" }}
        id="u1"
      />
      <polyline
        points="1047,312 991,365 928,335 815,455 685,332 545,332 450,418 450,481 495,520 536,520"
        style={{ fill: "none", stroke: "violet", strokeWidth: "15" }}
        id="u2"
      />
      <polyline
        points="230,338 350,450 650,450 765,565 765,650"
        style={{ fill: "none", stroke: "orange", strokeWidth: "15" }}
        id="u3"
      />
      <polyline
        points="140,540 575,540 617,500 617,400 485,237 485,164"
        style={{ fill: "none", stroke: "green", strokeWidth: "15" }}
        id="u4"
      />
      <polyline
        points="210,805 350,675 350,318 450,219 515, 219 613,120"
        style={{ fill: "none", stroke: "brown", strokeWidth: "15" }}
        id="u6"
      />
      <circle
        id="siebenhirten"
        cx="215"
        cy="800"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("siebenhirten") ? "brown" : "white"}
      />
      <circle
        id="perfektastrasse"
        cx="240"
        cy="775"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("perfektastrasse") ? "brown" : "white"}
      />
      <circle
        id="erlaaerstrasse"
        cx="270"
        cy="750"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("erlaaerstrasse") ? "brown" : "white"}
      />
      <circle
        id="alterlaa"
        cx="290"
        cy="730"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("alterlaa") ? "brown" : "white"}
      />
      <circle
        id="amschoepfwerk"
        cx="310"
        cy="710"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("amschoepfwerk") ? "brown" : "white"}
      />
      <circle
        id="tschertegasse"
        cx="330"
        cy="695"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("tschertegasse") ? "brown" : "white"}
      />
      <circle
        id="bahnhofmeidling"
        cx="350"
        cy="675"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("bahnhofmeidling") ? "brown" : "white"}
      />
      <circle
        id="laengenfeldgasse"
        cx="350"
        cy="540"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("laengenfeldgasse") ? "brown" : "white"}
      />
      <circle
        id="gumpendorferstrasse"
        cx="350"
        cy="495"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={
          activeStations.includes("gumpendorferstrasse") ? "brown" : "white"
        }
      />
      <circle
        id="westbahnhof"
        cx="350"
        cy="448"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("westbahnhof") ? "brown" : "white"}
      />
      <circle
        id="burggasse-stadthalle"
        cx="350"
        cy="410"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={
          activeStations.includes("burggasse-stadthalle") ? "brown" : "white"
        }
      />
      <circle
        id="thaliastrasse"
        cx="350"
        cy="375"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("thaliastrasse") ? "brown" : "white"}
      />
      <circle
        id="josefstaedterstrasse"
        cx="350"
        cy="340"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={
          activeStations.includes("josefstaedterstrasse") ? "brown" : "white"
        }
      />
      <circle
        id="alserstrasse"
        cx="370"
        cy="300"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("alserstrasse") ? "brown" : "white"}
      />
      <circle
        id="michelbeuern-akh"
        cx="390"
        cy="280"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("michelbeuern-akh") ? "brown" : "white"}
      />
      <circle
        id="waehringerstrasse-volksoper"
        cx="410"
        cy="260"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={
          activeStations.includes("waehringerstrasse-volksoper")
            ? "brown"
            : "white"
        }
      />
      <circle
        id="nussdorferstrasse"
        cx="430"
        cy="240"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("nussdorferstrasse") ? "brown" : "white"}
      />
      <circle
        id="spittelau"
        cx="485"
        cy="220"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("spittelau") ? "brown" : "white"}
      />
      <circle
        id="jaegerstrasse"
        cx="510"
        cy="219"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("jaegerstrasse") ? "brown" : "white"}
      />
      <circle
        id="dresdnerstrasse"
        cx="530"
        cy="205"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("dresdnerstrasse") ? "brown" : "white"}
      />
      <circle
        id="handelskai"
        cx="550"
        cy="185"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("handelskai") ? "brown" : "white"}
      />
      <circle
        id="neuedonau"
        cx="575"
        cy="160"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("neuedonau") ? "brown" : "white"}
      />
      <circle
        id="floridsdorf"
        cx="605"
        cy="125"
        r="10"
        stroke="black"
        strokeWidth="3"
        fill={activeStations.includes("floridsdorf") ? "brown" : "white"}
      />
    </svg>
  </div>
);

export default Map;
