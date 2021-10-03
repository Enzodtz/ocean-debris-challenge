import React from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { coordinates: [-58.3816, -34.6037] },
  { coordinates: [-68.1193, -16.4897] },
  { coordinates: [-47.8825, -15.7942] },
  { coordinates: [-70.6693, -33.4489] },
  { coordinates: [-74.0721, 4.711] },
  { coordinates: [-78.4678, -0.1807] },
  { coordinates: [-58.1551, 6.8013] },
  { coordinates: [-57.5759, -25.2637] },
  { coordinates: [-55.2038, 5.852] },
  { coordinates: [-56.1645, -34.9011] },
  { coordinates: [-66.9036, 10.4806] },
  { coordinates: [-500.0428, -12.0464] },
];

const MapChart = () => {
  return (
    <ComposableMap
      height="500"
      projection="geoMercator"
      // projectionConfig={{ rotate: [-90, 0, 0] }}
    >
      <ZoomableGroup zoom={1}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
          }
        </Geographies>
        {markers.map(({ coordinates }) => (
          <Marker coordinates={coordinates}>
            <circle r="0.5" />
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
