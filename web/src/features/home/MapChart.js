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

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const markers = [];
for (let i = 0; i < 450; i++) {
  markers.push({
    coordinates: [getRandomArbitrary(-180, -100), getRandomArbitrary(-50, -0)],
  });
}
for (let i = 0; i < 200; i++) {
  markers.push({
    coordinates: [getRandomArbitrary(-30, 0), getRandomArbitrary(-50, -0)],
  });
}

for (let i = 0; i < 300; i++) {
  markers.push({
    coordinates: [getRandomArbitrary(-50, -20), getRandomArbitrary(10, 50)],
  });
}
for (let i = 0; i < 450; i++) {
  markers.push({
    coordinates: [getRandomArbitrary(55, 95), getRandomArbitrary(-50, -0)],
  });
}
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
            <circle r=".5" />
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
