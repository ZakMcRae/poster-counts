import "./App.css";
import { useState } from "react";
import ProductDisplay from "./components/ProductDisplay";
import CountsGrid from "./components/CountsGrid";
import SettlementSection from "./components/SettlementSection";

function App() {
  // keep track of whether counts grid can be modified or not
  const [settledStatus, setSettledStatus] = useState(false);

  // keep track of poster info
  const [posterInfo, setPosterInfo] = useState({
    id: "001",
    price: 10,
    description: "Hamilton, ON Pier 8 Poster June 22, 2019",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0549/2034/7823/products/the-national-hamilton-on-pier-8-poster_4dd452d6-323a-420d-8cef-c0f21c5df80c_5000x.png?v=1635448244",
  });

  // keep track of counts, quantities,... in counts grid
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
      <div>
        <CountsGrid
          countStore={countStore}
          setCountScore={setCountScore}
          posterInfo={posterInfo}
          setPosterInfo={setPosterInfo}
          settledStatus={settledStatus}
          setSettledStatus={setSettledStatus}
        />
        <SettlementSection
          setSettledStatus={setSettledStatus}
          countStore={countStore}
        />
      </div>
    </div>
  );
}

export default App;
