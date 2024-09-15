import Image from "next/image";
import { useState } from "react";

const aboutFAQ = [
  {
    title: "What is CrOptimize?",
    body: "CrOptimize is a web application that provides farmers with personalized crop recommendations based on their location, soil type, and climate conditions. The platform leverages machine learning algorithms to analyze historical data and forecast future trends, enabling farmers to make informed decisions about crop selection and cultivation techniques.",
  },
  {
    title: "How does CrOptimize work?",
    body: "CrOptimize uses a combination of satellite imagery, weather data, and soil information to generate crop recommendations for users. By inputting their location and answering a series of questions about their farming practices, farmers can access detailed insights into the best crops to grow in their area, as well as tips on soil preparation, irrigation, and pest control.",
  },
  {
    title: "What are the benefits of using CrOptimize?",
    body: "CrOptimize helps farmers increase their crop yields, reduce input costs, and minimize environmental impact by providing tailored recommendations for sustainable agriculture. By optimizing crop selection and cultivation practices, farmers can improve their profitability and long-term sustainability.",
  },
];

function Accordion({ title, body }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExtra = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white border border-myGray10  rounded-lg">
      <div onClick={toggleExtra} className="flex px-10 py-6 justify-between">
        <p>{title}</p>
        <div>
          <Image src="/icons/arrow-down.svg" alt="area" width={16} height={16} />
        </div>
      </div>
      {isOpen && <p className="px-10 pb-6"> {body}</p>}
    </div>
  );
}

function AboutBody() {
  return (
    <div className="p-10">
      <div className="flex justify-center mb-8">
        <Image src="/images/croptimize-l.png" alt="CrOptimize" width={256} height={256} />
      </div>
      <div className="w-2/3 m-auto grid gap-4">
        {aboutFAQ.map((faq) => (
          <Accordion key={faq.title} title={faq.title} body={faq.body} />
        ))}
      </div>
    </div>
  );
}

export default AboutBody;
