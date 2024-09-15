import Image from "next/image";

function CropInformation({ selectedCrop }) {
  return (
    <div className="p-10">
      <div className="flex justify-center mb-8">
        <Image src="/images/sunflower-field.png" alt={selectedCrop} width={750} height={300} />
      </div>
      <h1 className="text-3xl text-center mb-12">{selectedCrop}</h1>
      <div className="w-2/3 m-auto">
        <h2 className="font-bold mt-8">1. Climatic Conditions</h2>
        <p>
          Sunflowers adapt well to various climates but thrive best in sunny conditions. They grow optimally in{" "}
          <span className="font-bold">temperatures between 20°C and 25°C</span>. While they are drought-tolerant, they require adequate
          moisture during the flowering and seed-setting stages for optimal growth.
        </p>
        <h2 className="font-bold mt-8">2. Soil Requirements</h2>
        <p>
          Sunflowers flourish in well-drained soils with a neutral to slightly alkaline <span className="font-bold">pH (6.0 - 7.5)</span>.
          They prefer soils rich in organic matter but can also grow in less fertile areas. It is important that the soil is not overly
          clayey to ensure proper water and nutrient absorption.
        </p>
        <h2 className="font-bold mt-8">3. Cultivation Techniques</h2>
        <p>
          Proper soil preparation and effective water management are crucial for successful sunflower cultivation. Sowing typically occurs
          in the spring when temperatures are suitable for germination. Fertilization should be tailored to the needs of the soil and
          plants, with a focus on nitrogen, potassium, and phosphorus. Weed control is essential during the early stages of growth.
        </p>
        <h2 className="font-bold mt-8">4. Economic Value and Uses</h2>
        <p>
          Sunflowers have significant commercial value, primarily due to the sunflower oil extracted from their seeds. Sunflower oil is
          widely used in cooking and the food industry, while the seed residues are valuable animal feed. Additionally, the plant
          contributes to soil health improvement and can be used in crop rotation to enhance soil fertility and reduce erosion.
        </p>
      </div>
    </div>
  );
}

export default CropInformation;
