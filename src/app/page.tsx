"use client";

import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapMap from "./components/Map";

export default function Home() {
  return (
    <div>
      <h1>My Map</h1>
      <MapMap />
    </div>
  );
}
