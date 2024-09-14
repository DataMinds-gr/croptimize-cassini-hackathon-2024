// import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, GeoJSON } from "react-leaflet";
import geojsonData from "../../public/maps/main.json";
import { useEffect, useState } from "react";

const GreeceBounds = [
  [36.0, 19.0],
  [41.0, 28.0],
];

const hoverStyle = {
  fillOpacity: 0.8,
};

const defaultStyle = {
  fillOpacity: 0.5,
};

// const colorMapping = {
//   notSuitable: "red",
//   suitable: "green",
//   unknown: "gray",
// };

const ZOOM_LEVEL = 7;

const RestrictMap = () => {
  const map = useMap();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    map.setMaxBounds(GreeceBounds as any);
    // map.on("drag", () => {
    //   map.setView(map.getCenter(), map.getZoom(), { animate: false });
    // });
    map.dragging.disable();
    map.setMinZoom(ZOOM_LEVEL);
    map.setMaxZoom(ZOOM_LEVEL);
  }, [map]);

  return null;
};

function Map() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [highlightedFeature, setHighlightedFeature] = useState<any>(geojsonData);

  const geoJsonStyle = (feature) => {
    return {
      color: feature.properties.color || "gray",
      weight: 2,
      fillOpacity: 0.5,
    };
  };

  const changeColor = (name: string) => {
    // TODO: Set a new color for the desired feature
    const updatedData = {
      ...geojsonData,
      features: geojsonData.features.map((feature) => {
        console.log(feature.properties.name === name);
        return feature.properties.name === name
          ? { ...feature, properties: { ...feature.properties, color: "blue" } }
          : feature;
      }),
    };
    setHighlightedFeature(updatedData);
  };

  const onEachFeature = (_, layer) => {
    layer.on({
      click: onFeatureClick,
      mouseover: onFeatureMouseOver,
      mouseout: onFeatureMouseOut,
    });
  };

  const onFeatureClick = (event) => {
    const { properties } = event.target.feature;
    console.log(properties.name);
  };

  const onFeatureMouseOver = (event) => {
    event.target.setStyle(hoverStyle);
  };

  const onFeatureMouseOut = (event) => {
    event.target.setStyle(defaultStyle);
  };

  return (
    <div className="grid grid-cols-2">
      <MapContainer style={{ height: "100vh", width: "100%", margin: "auto" }} center={[37.9838, 23.7275]} zoom={6}>
        <TileLayer
          url="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
          attribution='Map tiles by <a href="https://stamen.com">Stamen Design</a>, <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        <RestrictMap />
        <GeoJSON
          key={JSON.stringify(highlightedFeature)}
          data={highlightedFeature}
          style={geoJsonStyle}
          onEachFeature={onEachFeature}
        />
      </MapContainer>
      <div>
        <button className="bg-green-600 rounded-lg px-6 py-2" onClick={() => changeColor("East Macedonia and Thrace")}>
          color
        </button>
      </div>
    </div>
  );
}

export default Map;
