import { useDispatch } from "react-redux";
import { setStatusTrue } from "../redux/settledStatus";

function SettlementSection(props) {
  const { totalSold, gross } = props.totals;

  const dispatch = useDispatch();

  return (
    <div className="settlement-section">
      <div className="settlement-inner">
        <p className="settlement-section-title">TOTAL</p>
        <div className="units-sold-circle">
          <p className="units-sold">{totalSold}</p>
          <p>Units</p>
          <p>Sold</p>
        </div>
        <p className="gross">
          {parseFloat(gross).toLocaleString("en", {
            // currency not actually usd - formating for display purposes only
            currency: "usd",
            style: "currency",
          })}
        </p>
        <button
          onClick={() => {
            dispatch(setStatusTrue());
          }}
        >
          SETTLE
        </button>
      </div>
    </div>
  );
}

export default SettlementSection;
