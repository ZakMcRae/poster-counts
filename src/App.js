import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductDisplay from "./components/ProductDisplay";
import CountsGrid from "./components/CountsGrid";
import SettlementSection from "./components/SettlementSection";
import { setTotals } from "./redux/slices/totals";

function App() {
  const dispatch = useDispatch();

  // keep track of counts, quantities,... per size needed for calculating totals in counts grid
  const [countStore, setCountStore] = useState({});

  // update totals upon countStore change
  useEffect(() => {
    const totals = { totalIn: 0, comp: 0, countOut: 0, totalSold: 0, gross: 0 };
    Object.keys(countStore).forEach((key) => {
      totals.totalIn += countStore[key].totalIn;
      totals.comp += +countStore[key].comp;
      totals.countOut += countStore[key].countOut;
      totals.totalSold += countStore[key].totalSold;
      totals.gross += countStore[key].gross;
    });
    dispatch(setTotals(totals));
  }, [dispatch, countStore]);

  return (
    <div className="App">
      <ProductDisplay />
      <div>
        <CountsGrid setCountStore={setCountStore} />
        <SettlementSection />
      </div>
    </div>
  );
}

export default App;
