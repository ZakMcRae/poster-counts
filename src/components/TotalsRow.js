import { useState } from "react";
import EditItemForm from "./EditItemForm";
import ProgressCircle from "./ProgressCircle";

function TotalsRow(props) {
  const { totalIn, comp, countOut, totalSold, gross } = props.countStore;
  const { posterInfo, setPosterInfo } = props;
  const [editFormStatus, setEditFormStatus] = useState(false);

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
        {/* todo gross should display 2 decimal places */}
        <div className="totals-element blue-text">${gross}</div>
      </div>
      <div className="form-row">
        {editFormStatus ? (
          <EditItemForm
            posterInfo={posterInfo}
            setPosterInfo={setPosterInfo}
            toggleEditFormStatus={toggleEditFormStatus}
          />
        ) : null}
      </div>
    </>
  );
}

export default TotalsRow;
