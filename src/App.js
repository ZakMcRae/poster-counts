import "./App.css";
import { useState } from "react";
import ProductDisplay from "./components/ProductDisplay";
import InputRow from "./components/InputRow";
import LabelRow from "./components/LabelRow";
import TotalsRow from "./components/TotalsRow";

function App() {
  const [posterInfo, setPosterInfo] = useState({
    id: "001",
    price: 10,
    description: "Hamilton, ON Pier 8 Poster June 22, 2019",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0549/2034/7823/products/the-national-hamilton-on-pier-8-poster_4dd452d6-323a-420d-8cef-c0f21c5df80c_5000x.png?v=1635448244",
  });
  const [countStore, setCountScore] = useState({
    qtyAvailable: 0,
    countIn: 0,
    add: 0,
    totalIn: 0,
    comp: 0,
    countOut: 0,
    totalSold: 0,
    gross: 0,
  });

  return (
    <div className="App">
      <ProductDisplay posterInfo={posterInfo} />
      <div className="counts-grid">
        <LabelRow></LabelRow>
        <InputRow
          countStore={countStore}
          setCountScore={setCountScore}
          posterInfo={posterInfo}
        ></InputRow>
        <TotalsRow
          countStore={countStore}
          posterInfo={posterInfo}
          setPosterInfo={setPosterInfo}
        ></TotalsRow>
      </div>
    </div>
  );
}

export default App;
