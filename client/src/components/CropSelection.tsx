import Image from "next/image";
import { useState } from "react";

const crops = [
  {
    name: "Sunflower",
    icon: "/images/crops/sunflower.png",
  },
  {
    name: "Olives",
    icon: "/images/crops/olives.png",
  },
  {
    name: "Cotton",
    icon: "/images/crops/cotton.png",
  },
  {
    name: "Legumes",
    icon: "/images/crops/legumes.png",
  },
  {
    name: "Pome Fruits",
    icon: "/images/crops/pome.png",
  },
  {
    name: "Stone Fruits",
    icon: "/images/crops/stone.png",
  },
  {
    name: "Citrus Fruits",
    icon: "/images/crops/citrus.png",
  },
  {
    name: "Vegetables",
    icon: "/images/crops/vegetables.png",
  },
  {
    name: "Aromatic Plants",
    icon: "/images/crops/aromatic.png",
  },
  {
    name: "Nuts",
    icon: "/images/crops/nuts.png",
  },
  {
    name: "Vineyards",
    icon: "/images/crops/vine.png",
  },
  {
    name: "Cereals",
    icon: "/images/crops/cereals.png",
  },
];

function CropOption({ name, icon, isSelected, handleClick }) {
  return (
    <div className="flex gap-4 justify-between mb-4">
      <div
        onClick={handleClick}
        className={`flex-1 flex gap-2 hover:gap-4 border hover:transition-all border-y-myGray10 p-2 rounded-xl ${
          isSelected && "bg-myGray5"
        }`}
      >
        <Image src={icon} alt={name} width={32} height={32} />
        <span>{name}</span>
      </div>
      <Image src="/icons/info.svg" alt={"info"} width={24} height={24} />
    </div>
  );
}

function CropSelection({ selectedCrop, setSelectedCrop }) {
  const [search, setSearch] = useState("");

  const filteredCrops = crops.filter((crop) => crop.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="max-w-[10%] min-w-[350px] h-screen p-8 text-xl border-l-myGray10 border">
      <div className="pb-6">
        <h1>Crop</h1>
        <p className="text-myGray40">Select your crop</p>
      </div>
      <div className="py-6 border-t border-b border-myGray10 ">
        <div className="bg-myGray5 hover:bg-myGray10 px-2 py-3 rounded-xl flex gap-4 ">
          <Image src="/icons/search.svg" alt={"search"} width={24} height={24} />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none focus:outline-none w-auto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="pt-6">
        {filteredCrops.map((crop) => (
          <CropOption
            key={crop.name}
            name={crop.name}
            icon={crop.icon}
            isSelected={selectedCrop === crop.name}
            handleClick={() => {
              if (selectedCrop === crop.name) setSelectedCrop("");
              else {
                setSelectedCrop(crop.name);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default CropSelection;
