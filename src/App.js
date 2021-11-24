import "./App.css";
import { useState, useEffect } from "react";
import ProductDisplay from "./components/ProductDisplay";
import CountsGrid from "./components/CountsGrid";
import SettlementSection from "./components/SettlementSection";

function App() {
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
      <ProductDisplay />
      <div>
        <CountsGrid setCountStore={setCountStore} totals={totals} />
        <SettlementSection totals={totals} />
      </div>
    </div>
  );
}

export default App;
