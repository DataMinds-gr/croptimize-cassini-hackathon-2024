import Image from "next/image";
import { useState } from "react";

function StatisticCard({ title, value, rangeMin, rangeMax, real = false }) {
  const [extraOpen, setExtraOpen] = useState(false);

  const percentage = ((value - rangeMin) / (rangeMax - rangeMin)) * 100;
  const center = (rangeMin + rangeMax) / 2;

  const getColor = (value, rangeMin, rangeMax) => {
    const distanceFromCenter = Math.abs(value - center);
    const maxDistance = Math.max(center - rangeMin, rangeMax - center);
    const normalizedDistance = distanceFromCenter / maxDistance;
    if (normalizedDistance < 0.5) {
      const green = 255;
      const red = Math.floor(512 * normalizedDistance);
      return `rgba(${red}, ${green}, 0, 0.5)`;
    } else {
      const red = 255;
      const green = Math.floor(255 - 512 * (normalizedDistance - 0.5));
      return `rgba(${red}, ${green}, 0, 0.5)`;
    }
  };

  const toggleExtra = () => {
    setExtraOpen(!extraOpen);
  };

  const placeholder = (
    <div className="h-16 flex items-center justify-center">
      <p className="text-center">Graph with historical data and forecast</p>
    </div>
  );

  const graphMock = (
    <div className="pt-4 relative mb-[420px]">
      <div className="absolute w-[800px] h-[600px] top-10 left-0">
        <Image src="/images/graph.png" alt="graph" width={800} height={600} className="rounded-xl" />
      </div>
    </div>
  );

  return (
    <div className="bg-myGray5 p-4 rounded-xl h-fit">
      <div className="flex justify-between mb-2">
        <p>{title}</p>
        <div onClick={toggleExtra}>
          <Image src="/icons/arrow-down.svg" alt="area" width={16} height={16} />
        </div>
      </div>
      <div className="relative flex items-center rounded-xl bg-white px-2">
        <p>{rangeMin}</p>
        <div className="relative w-full rounded-full">
          <div
            className="absolute -top-3 text-center px-6 rounded-xl"
            style={{
              left: `${percentage}%`,
              transform: "translateX(-50%)",
              backgroundColor: getColor(value, rangeMin, rangeMax),
            }}
          >
            {value}
          </div>
        </div>
        <p>{rangeMax}</p>
      </div>
      {extraOpen && (real ? graphMock : placeholder)}
    </div>
  );
}

function StatisticCardDisabled({ title }) {
  return (
    <div className="bg-myGray5 p-4 rounded-xl">
      <div className="flex justify-between mb-2">
        <p>{title}</p>
        <Image src="/icons/arrow-down.svg" alt="area" width={16} height={16} />
      </div>
      <div className="flex justify-center rounded-xl bg-white px-2">
        <p className="px-8 h-6 bg-myGray40 rounded-xl"></p>
      </div>
    </div>
  );
}

function MapStatisticModal({ modalOpen, closeModal, selectedArea, selectedCrop }) {
  console.log(selectedArea);
  return (
    <>
      {modalOpen ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50" onClick={closeModal}>
            <div className="relative w-3/5 h-[800px] overflow-auto bg-white" onClick={(e) => e.stopPropagation()}>
              <div className="rounded-lg relative bg-white w-full p-16 h-full">
                <div className="grid justify-center text-center mb-12 gap-2">
                  <h3 className="text-3xl font-semibold">{selectedArea.name}</h3>
                  <div className="flex gap-1">
                    <p className="text-myGray40">Color grade is based on suitability for</p>
                    <p className="font-bold">{selectedCrop}</p>
                  </div>
                  <button className="absolute top-6 right-6 p-2" onClick={closeModal}>
                    <Image src="/icons/x.svg" alt="close" width={24} height={24} />
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-8">
                  <StatisticCard title="Temperature" value={selectedArea.lst.value} rangeMin={-20} rangeMax={38} real />
                  <StatisticCard title="Organic Matter" value="-3" rangeMin={-5} rangeMax={38} />
                  <StatisticCard title="Rainfall Level" value="23" rangeMin={-5} rangeMax={38} />
                  <StatisticCard title="Humidity" value="30" rangeMin={-5} rangeMax={38} />
                  <StatisticCardDisabled title="Soil Type" />
                  <StatisticCardDisabled title="Soil pH" />
                  <StatisticCardDisabled title="Extreme Weather" />
                  <StatisticCardDisabled title="Salinity" />
                  <StatisticCardDisabled title="Altitude" />
                </div>
                <ul className="py-4 flex justify-center gap-4">
                  <li className="flex items-center mb-2 gap-2">
                    <div className="rounded-full w-4 h-4 bg-myRed opacity-50"></div> Not Suitable
                  </li>
                  <li className="flex items-center mb-2 gap-2">
                    <div className="rounded-full w-4 h-4 bg-myOrange opacity-50"></div>Marginally Suitable
                  </li>
                  <li className="flex items-center mb-2 gap-2">
                    <div className="rounded-full w-4 h-4 bg-myLightGreen opacity-50"></div>Moderately Suitable
                  </li>
                  <li className="flex items-center mb-2 gap-2">
                    <div className="rounded-full w-4 h-4 bg-myGreen opacity-50"></div>Highly Suitable
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default MapStatisticModal;
