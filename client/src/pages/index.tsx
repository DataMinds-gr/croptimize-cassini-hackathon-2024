import CropSelection from "@/components/CropSelection";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  const [selectedCrop, setSelectedCrop] = useState(null);
  return (
    <div className="flex">
      <Map selectedCrop={selectedCrop} />
      <CropSelection selectedCrop={selectedCrop} setSelectedCrop={setSelectedCrop} />
    </div>
  );
}
