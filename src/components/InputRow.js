import { useState, useEffect } from "react";

function InputRow(props) {
  const [editMode, setEditMode] = useState(false);
  const { setCountScore } = props;
  const { price } = props.posterInfo;
  const {
    qtyAvailable,
    countIn,
    add,
    totalIn,
    comp,
    countOut,
    totalSold,
    gross,
  } = props.countStore;

  useEffect(() => {
    //update countScore when a value changes
    setCountScore((prevCountScore) => {
      return {
        ...prevCountScore,
        totalIn: +countIn + +add,
        totalSold: +totalIn - +countOut - +comp,
        gross: +totalSold * +price,
        qtyAvailable: +countOut - +countIn,
      };
    });
  }, [
    qtyAvailable,
    countIn,
    add,
    comp,
    countOut,
    totalIn,
    setCountScore,
    price,
    totalSold,
  ]);

  const enableEditMode = (e) => {
    setEditMode(e.target.id);
  };

  const removeEditMode = (e) => {
    setEditMode(false);
  };

  const updateValue = (e) => {
    props.setCountScore((prevSetCountScore) => {
      return { ...prevSetCountScore, [e.target.id]: e.target.value };
    });
  };

  return (
    <div className="input-row">
      <div
        className="input-element black-text"
        id="qtyAvailable"
        onClick={enableEditMode}
      >
        {qtyAvailable}
      </div>

      {/* if value of editMode matches div id, replace with an input field */}
      {editMode === "countIn" ? (
        <input
          id="countIn"
          placeholder={countIn}
          autoFocus
          onChange={updateValue}
          onBlur={removeEditMode}
        ></input>
      ) : (
        <div
          className="input-element black-text"
          id="countIn"
          onClick={enableEditMode}
        >
          {countIn}
        </div>
      )}

      {editMode === "add" ? (
        <input
          id="add"
          placeholder={add}
          autoFocus
          onChange={updateValue}
          onBlur={removeEditMode}
        ></input>
      ) : (
        <div
          className="input-element green-text"
          id="add"
          onClick={enableEditMode}
        >
          {add}
        </div>
      )}

      <div className="input-element blue-text">{totalIn}</div>

      {editMode === "comp" ? (
        <input
          id="comp"
          placeholder={comp}
          autoFocus
          onChange={updateValue}
          onBlur={removeEditMode}
        ></input>
      ) : (
        <div
          className="input-element red-text"
          id="comp"
          onClick={enableEditMode}
        >
          {comp}
        </div>
      )}

      {editMode === "countOut" ? (
        <input
          id="countOut"
          placeholder={countOut}
          autoFocus
          onChange={updateValue}
          onBlur={removeEditMode}
        ></input>
      ) : (
        <div
          className="input-element black-text"
          id="countOut"
          onClick={enableEditMode}
        >
          {countOut}
        </div>
      )}

      <div className="input-element blue-text">{totalSold}</div>
      <div className="input-element blue-text">{gross.toFixed(2)}</div>
    </div>
  );
}

export default InputRow;
