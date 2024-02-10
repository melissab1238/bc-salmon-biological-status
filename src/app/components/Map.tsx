import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { MAPBOX_API_KEY } from "../api/mapboxgl";
const BRITISH_COLUMBIA_COORDINATES = [54.837, -125.148];
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ReactMapboxGl({
  accessToken: MAPBOX_API_KEY,
});

export default function MapMap() {
  return (
    <Map
      style="mapbox://styles/mapbox/light-v10"
      containerStyle={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[54.837, -125.148]} />
      </Layer>
    </Map>
  );
}
