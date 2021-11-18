import { useState, useEffect } from "react";

function InputRow(props) {
  // tracks which input row element should be changed from a div to an input
  const [editMode, setEditMode] = useState(false);

  // destructure props to clean up code below
  const { setCountScore, settledStatus } = props;
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

  //update countScore when a value changes
  useEffect(() => {
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

  // sets which input row element should be changed from a div to an input
  // if settled status is true, no edits can be made
  const enableEditMode = (e) => {
    if (!settledStatus) {
      setEditMode(e.target.id);
    } else setEditMode(false);
  };

  // unsets which input row element should be changed into an input - turns entire row back to divs
  const removeEditMode = (e) => {
    setEditMode(false);
  };

  // changes value in state for countStore
  const updateValue = (e) => {
    props.setCountScore((prevSetCountScore) => {
      return { ...prevSetCountScore, [e.target.id]: e.target.value };
    });
  };

  // all black-text, green-text, red-text elements below are conditionally rendered as inputs instead of divs based on the value of editMode in state
  // all other elements are just divs to display the value in the count grid
  return (
    <div className="input-row">
      <div
        className="input-element black-text"
        id="qtyAvailable"
        onClick={enableEditMode}
      >
        {qtyAvailable}
      </div>

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
