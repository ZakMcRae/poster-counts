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
  } = props;

  return (
    <div className="counts-grid">
      <LabelRow></LabelRow>
      <InputRow
        countStore={countStore}
        setCountScore={setCountScore}
        posterInfo={posterInfo}
        settledStatus={settledStatus}
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
