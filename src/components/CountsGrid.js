import InputRow from "../components/InputRow";
import LabelRow from "../components/LabelRow";
import TotalsRow from "../components/TotalsRow";

function CountsGrid(props) {
  const { setCountStore, posterInfo, setPosterInfo, totals } = props;

  return (
    <div className="counts-grid">
      <LabelRow></LabelRow>
      {/* Create an InputRow for every size in the poster object in state */}
      {posterInfo.sizes.map((size) => {
        return (
          <InputRow
            key={size}
            size={size}
            setCountStore={setCountStore}
            posterInfo={posterInfo}
          ></InputRow>
        );
      })}
      <TotalsRow
        posterInfo={posterInfo}
        setPosterInfo={setPosterInfo}
        totals={totals}
      ></TotalsRow>
    </div>
  );
}

export default CountsGrid;
