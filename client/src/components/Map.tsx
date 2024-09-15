// import "leaflet/dist/leaflet.css";
import lst from "@/mocks/lst.json";
import allRanges from "@/mocks/ranges.json";
import { useEffect, useState } from "react";
import { GeoJSON, MapContainer, TileLayer, useMap } from "react-leaflet";
import geojsonData from "../../public/maps/main.json";
import Legend from "./Legend";
import MapStatistic from "./MapStatistic";

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

const colorMapping = [
  "#FB6D64", // red
  "#4E763B", // green
  "#A3C78F", // light green
  "#FFA500", // orange
];

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

function Map({ selectedCrop }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  const [highlightedFeature, setHighlightedFeature] = useState<any>(geojsonData);
  const [selectedArea, setSelectedArea] = useState({ name: null, lst: null });
  const [modalOpen, setModalOpen] = useState(false);
  const cropRanges = allRanges[selectedCrop];

  const geoJsonStyle = (feature) => {
    const regionLst = lst.results.find((region) => region.name === feature.properties.name);
    const cropRangeSuitability = cropRanges?.find((suitability) => {
      console.log(suitability);
      return suitability.ranges.find((range) => {
        console.log(range);
        return range.min <= regionLst.value && regionLst.value <= range.max;
      });
    });
    console.log(cropRangeSuitability?.label);

    return {
      color: colorMapping[cropRangeSuitability?.value] || "gray",
      weight: 2,
      fillOpacity: 0.5,
    };
  };

  // const changeColor = (name: string) => {
  //   // TODO: Set a new color for the desired feature
  //   const updatedData = {
  //     ...geojsonData,
  //     features: geojsonData.features.map((feature) => {
  //       console.log(feature.properties.name === name);
  //       return feature.properties.name === name ? { ...feature, properties: { ...feature.properties, color: "blue" } } : feature;
  //     }),
  //   };
  //   setHighlightedFeature(updatedData);
  // };

  const onEachFeature = (_, layer) => {
    layer.on({
      click: onFeatureClick,
      mouseover: onFeatureMouseOver,
      mouseout: onFeatureMouseOut,
    });
  };

  const onFeatureClick = (event) => {
    const { properties } = event.target.feature;
    console.log(selectedCrop);
    if (selectedCrop) {
      setModalOpen(true);
      setSelectedArea({ name: properties.name, lst: lst.results.find((region) => region.name === properties.name) });
    }
  };

  const onFeatureMouseOver = (event) => {
    event.target.setStyle(hoverStyle);
  };

  const onFeatureMouseOut = (event) => {
    event.target.setStyle(defaultStyle);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedArea({ name: null, lst: null });
  };

  return (
    <>
      <div className="relative w-full z-10">
        <MapContainer style={{ height: "100vh", width: "100%", margin: "auto" }} center={[37.9838, 23.7275]} zoom={6}>
          <TileLayer
            url="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
            attribution='Map tiles by <a href="https://stamen.com">Stamen Design</a>, <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
          />
          <RestrictMap />
          <GeoJSON
            key={JSON.stringify({ highlightedFeature, selectedCrop })}
            data={highlightedFeature}
            style={geoJsonStyle}
            onEachFeature={onEachFeature}
          />
        </MapContainer>
        {selectedCrop && <Legend />}
      </div>
      <MapStatistic modalOpen={modalOpen} closeModal={handleCloseModal} selectedArea={selectedArea} selectedCrop={selectedCrop} />
    </>
  );

  // return (
  //   <div className="grid grid-cols-2">
  //     <MapContainer style={{ height: "100vh", width: "100%", margin: "auto" }} center={[37.9838, 23.7275]} zoom={6}>
  //       <TileLayer
  //         url="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
  //         attribution='Map tiles by <a href="https://stamen.com">Stamen Design</a>, <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  //       />
  //       <RestrictMap />
  //       <GeoJSON
  //         key={JSON.stringify(highlightedFeature)}
  //         data={highlightedFeature}
  //         style={geoJsonStyle}
  //         onEachFeature={onEachFeature}
  //       />
  //     </MapContainer>
  //     <div>
  //       <button className="bg-green-600 rounded-lg px-6 py-2" onClick={() => changeColor("East Macedonia and Thrace")}>
  //         color
  //       </button>
  //     </div>
  //   </div>
  // );
}

export default Map;
