import InputRow from "../components/InputRow";
import LabelRow from "../components/LabelRow";
import TotalsRow from "../components/TotalsRow";
import { useSelector } from "react-redux";

function CountsGrid(props) {
  const { setCountStore, totals } = props;

  // get poster info from redux store
  const { sizes } = useSelector((state) => state.poster);

  return (
    <div className="counts-grid">
      <LabelRow></LabelRow>
      {/* Create an InputRow for every size in the poster object in state */}
      {sizes.map((size) => {
        return (
          <InputRow
            key={size}
            size={size}
            setCountStore={setCountStore}
          ></InputRow>
        );
      })}
      <TotalsRow totals={totals}></TotalsRow>
    </div>
  );
}

export default CountsGrid;
