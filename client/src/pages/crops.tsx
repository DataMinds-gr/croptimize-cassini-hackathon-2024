import CropInformation from "@/components/CropInformation";
import CropSelection from "@/components/CropSelection";
import Image from "next/image";
import { useState } from "react";

function Crops() {
  const [selectedCrop, setSelectedCrop] = useState(null);
  return (
    <div className="flex">
      <div className="flex-1 bg-myGray10">
        <div className="p-4 bg-white">
          <h1 className="text-3xl font-bold">Crops</h1>
          <p className="text-myGray40">Select a crop to view information</p>
        </div>
        {selectedCrop ? (
          <CropInformation selectedCrop={selectedCrop} />
        ) : (
          <div className="p-4 h-1/2 w-full flex justify-center items-center text-myGray40">
            <p>Select a crop</p>
            <Image src="/icons/arrow-select.svg" alt="arrow right" width={223} height={43} className="mt-24" />
          </div>
        )}
      </div>
      <CropSelection selectedCrop={selectedCrop} setSelectedCrop={setSelectedCrop} />
    </div>
  );
}

export default Crops;
