import { useState } from "react";
import EditItemForm from "./EditItemForm";
import ProgressCircle from "./ProgressCircle";

function TotalsRow(props) {
  // keep track of whether to display form to edit item's price or note
  const [editFormStatus, setEditFormStatus] = useState(false);

  const { totalIn, comp, countOut, totalSold, gross } = props.totals;

  const toggleEditFormStatus = () => {
    setEditFormStatus((prevEditFormStatus) => !prevEditFormStatus);
  };

  return (
    <>
      <div className="totals-row">
        <div className="button-container">
          <button className="more-rows-button" onClick={toggleEditFormStatus}>
            More
          </button>
        </div>
        <div className="totals-element blue-text">{totalIn}</div>
        <div className="totals-element red-text">{comp}</div>
        <div className="totals-element black-text">{countOut}</div>
        <div className="totals-element">
          <ProgressCircle totalIn={totalIn} totalSold={totalSold} />
        </div>
        <div className="totals-element blue-text">${gross.toFixed(2)}</div>
      </div>
      <div className="form-row">
        {editFormStatus ? (
          <EditItemForm toggleEditFormStatus={toggleEditFormStatus} />
        ) : null}
      </div>
    </>
  );
}

export default TotalsRow;
