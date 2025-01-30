"use client";

import { useEffect, useState } from "react";
import { convertNodesToGeoJSON } from "@/utils/demo-geojson";

import { WorkerProvider } from "@/contexts/WorkerContext";
import { FeatureCollection, GeoJsonProperties, Geometry, Point } from "geojson";
import Map from "./workerProvider";

export default function MapWrapper() {
  const [geoJSONData, setGeoJSONData] = useState<
    FeatureCollection<Point, GeoJsonProperties>
  >({
    type: "FeatureCollection",
    features: [],
  });
  const [workerIds, setWorkerIds] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const data = convertNodesToGeoJSON();
      const ids = data.features.map((feature) => feature?.properties?.id);
      setGeoJSONData(data);
      setWorkerIds(ids);
      setIsReady(true);

      console.log("Initial Worker IDs:", ids);
    } catch (error) {
      console.error("Error fetching initial data:", error);
    }
  }, []);

  const emptyFeatureCollection: FeatureCollection<
    Geometry,
    { [name: string]: any }
  > = {
    type: "FeatureCollection",
    features: [],
  };

  return (
    <WorkerProvider initialWorkerIds={workerIds}>
      <Map
        initialGeoJSONData={
          geoJSONData.features.length > 0 ? geoJSONData : emptyFeatureCollection
        }
      />
    </WorkerProvider>
  );
}

