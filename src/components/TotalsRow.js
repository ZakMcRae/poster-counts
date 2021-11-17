function TotalsRow(props) {
  const { totalIn, comp, countOut, totalSold, gross } = props.countStore;

  return (
    <div className="totals-row">
      <div className="button-container">
        <button className="more-rows-button">More</button>
      </div>
      <div className="totals-element blue-text">{totalIn}</div>
      <div className="totals-element red-text">{comp}</div>
      <div className="totals-element black-text">{countOut}</div>
      <div className="totals-element blue-text">{totalSold}</div>
      <div className="totals-element blue-text">${gross.toFixed(2)}</div>
    </div>
  );
}

export default TotalsRow;
