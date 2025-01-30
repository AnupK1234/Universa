import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { NodeGeoJSON } from "@/utils/demo-geojson";
import { useWorkerContext } from "@/contexts/WorkerContext";
import useMapPopup from "./useMapPopup";
import { useMemo } from "react";

const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

interface MapProps {
  initialGeoJSONData: GeoJSON.FeatureCollection;
}

export const Map = ({ initialGeoJSONData }: MapProps) => {
  const mapContainerRef = useRef(null);
  const [zoomLevel] = useState(2.2);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [activePopupId, setActivePopupId] = useState<string | null>(null);
  const [clickedLngLat, setClickedLngLat] = useState<[number, number] | null>(
    null,
  );

  console.log("Map component rendered");

  const { workerData } = useWorkerContext();
  const backendUrl = `http://${process.env.NEXT_PUBLIC_IP_ADDRESS}:${process.env.NEXT_PUBLIC_PORT}`;

  const workerInfo = useMemo(() => {
    return activePopupId ? workerData[activePopupId] || null : null;
  }, [workerData, activePopupId]);

  useMapPopup({
    activePopupId,
    clickedLngLat,
    map: mapRef.current,
    workerInfo: workerInfo,
    backendUrl,
    onClose: () => {
      setActivePopupId(null);
      setClickedLngLat(null);
    },
  });

  useEffect(() => {
    if (!mapContainerRef.current) return;

    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      zoom: zoomLevel,
      center: [0, 0],
      attributionControl: false,
    });

    mapRef.current = map;

    map.on("load", () => {
      const source = map.addSource("agents", {
        type: "geojson",
        data: initialGeoJSONData,
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      map.addLayer({
        id: "unclustered-point",
        type: "circle",
        source: "agents",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": "#11F4D1",
          "circle-radius": 20,
        },
      });

      map.addLayer({
        id: "unclustered-point-label",
        type: "symbol",
        source: "agents",
        filter: ["!", ["has", "point_count"]],
        layout: {
          "text-field": [
            "number-format",
            ["+", ["to-number", ["get", "id"]], 1],
            {},
          ],
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
          "text-size": 16,
        },
        paint: {
          "text-color": "#1C293C",
        },
      });

      map.on("click", "unclustered-point", (e) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0];
          const { id } = feature.properties as Partial<NodeGeoJSON>;

          if (id) {
            setActivePopupId(id);
            setClickedLngLat([e.lngLat.lng, e.lngLat.lat]);
          }
        }
      });
    });

    return () => {
      setActivePopupId(null);
      setClickedLngLat(null);
      if (map) map.remove();
    };
  }, [initialGeoJSONData, zoomLevel]);

  return <div className="w-full h-full" ref={mapContainerRef}></div>;
};

export default Map;

