function Legend() {
  return (
    <div className="absolute bottom-12 left-12 bg-white border border-myGray10 rounded-xl p-4 grid gap-4 divide-y">
      <div>
        <h2>Legend</h2>
        <p className="text-myGray40">Crop Suitability Score</p>
      </div>
      <ul className="py-4">
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
  );
}

export default Legend;
