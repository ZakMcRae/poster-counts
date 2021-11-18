import InputRow from "../components/InputRow";
import LabelRow from "../components/LabelRow";
import TotalsRow from "../components/TotalsRow";

function CountsGrid(props) {
  const {
    countStore,
    setCountScore,
    posterInfo,
    setPosterInfo,
    settledStatus,
    setSettledStatus,
  } = props;

  return (
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
  );
}

export default CountsGrid;
