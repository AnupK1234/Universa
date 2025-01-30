"use client";

import React from "react";
import MapWrapper from "./wrapper";
import "mapbox-gl/dist/mapbox-gl.css";

const MemoizedMapWrapper = React.memo(MapWrapper);

export default function Map() {
  return <MemoizedMapWrapper />;
}

