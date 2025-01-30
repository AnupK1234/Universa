import { FeatureCollection, Point } from "geojson";

export type NodeGeoJSON = {
  id: string;
  geo_info: {
    longitude: number;
    latitude: number;
    altitude: number;
  };
};

const sampleNodes: NodeGeoJSON[] = [
  // {
  //     id: "worker_0",
  //     geo_info: {
  //         longitude: 139.6917,
  //         latitude: 35.6895,
  //         altitude: 40
  //     }
  // },
  // {
  //     id: "worker_1",
  //     geo_info: {
  //         longitude: -74.0060,
  //         latitude: 40.7128,
  //         altitude: 10
  //     }
  // },
  {
    id: "1",
    geo_info: {
      longitude: 151.2093,
      latitude: -33.8688,
      altitude: 25,
    },
  },
  {
    id: "3",
    geo_info: {
      longitude: 18.4241,
      latitude: -33.9249,
      altitude: 15,
    },
  },
  {
    id: "2",
    geo_info: {
      longitude: -43.1729,
      latitude: -22.9068,
      altitude: 30,
    },
  },
  {
    id: "0",
    geo_info: {
      longitude: -0.1276,
      latitude: 51.5074,
      altitude: 20,
    },
  },
  {
    id: "4",
    geo_info: {
      longitude: 139.6917,
      latitude: 35.6895,
      altitude: 40,
    },
  },
  {
    id: "5",
    geo_info: {
      longitude: -74.006,
      latitude: 40.7128,
      altitude: 10,
    },
  },
];

export const convertNodesToGeoJSON = (): FeatureCollection<Point> => {
  const nodes = sampleNodes;

  const geoJSONData: FeatureCollection<Point> = {
    type: "FeatureCollection",
    features: nodes.map((node) => ({
      type: "Feature",
      properties: {
        id: node.id,
      },
      geometry: {
        type: "Point",
        coordinates: [
          node.geo_info.longitude,
          node.geo_info.latitude,
          node.geo_info.altitude,
        ],
      },
    })),
  };

  return geoJSONData;
};
