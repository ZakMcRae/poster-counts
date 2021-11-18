function SettlementSection(props) {
  const { setSettledStatus } = props;
  const { totalSold, gross } = props.countStore;

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
          $
          {parseFloat(gross)
            .toFixed(2)
            .toLocaleString("en", { useGrouping: true })}
        </p>
        <button
          onClick={() => {
            setSettledStatus(true);
          }}
        >
          SETTLE
        </button>
      </div>
    </div>
  );
}

export default SettlementSection;
