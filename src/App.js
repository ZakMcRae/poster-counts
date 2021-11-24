import "./App.css";
import { useState, useEffect } from "react";
import ProductDisplay from "./components/ProductDisplay";
import CountsGrid from "./components/CountsGrid";
import SettlementSection from "./components/SettlementSection";

function App() {
  // keep track of whether counts grid can be modified or not

  // keep track of poster info
  const [posterInfo, setPosterInfo] = useState({
    id: "001",
    sizes: ["small", "large"],
    price: 10,
    note: "Hamilton, ON Pier 8 Poster June 22, 2019",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0549/2034/7823/products/the-national-hamilton-on-pier-8-poster_4dd452d6-323a-420d-8cef-c0f21c5df80c_5000x.png?v=1635448244",
  });

  // keep track of counts, quantities,... per size needed for calculating totals in counts grid
  const [countStore, setCountStore] = useState({});

  // keep track of totals for displaying in TotalsRow and SettlementSection
  const [totals, setTotals] = useState({
    totalIn: 0,
    comp: 0,
    countOut: 0,
    totalSold: 0,
    gross: 0,
  });

  // update totals upon countStore change
  useEffect(() => {
    const totals = { totalIn: 0, comp: 0, countOut: 0, totalSold: 0, gross: 0 };
    Object.keys(countStore).forEach((key) => {
      totals.totalIn += countStore[key].totalIn;
      totals.comp += countStore[key].comp;
      totals.countOut += countStore[key].countOut;
      totals.totalSold += countStore[key].totalSold;
      totals.gross += countStore[key].gross;
    });
    setTotals(totals);
  }, [countStore]);

  return (
    <div className="App">
      <ProductDisplay posterInfo={posterInfo} />
      <div>
        <CountsGrid
          setCountStore={setCountStore}
          posterInfo={posterInfo}
          setPosterInfo={setPosterInfo}
          totals={totals}
        />
        <SettlementSection totals={totals} />
      </div>
    </div>
  );
}

export default App;
