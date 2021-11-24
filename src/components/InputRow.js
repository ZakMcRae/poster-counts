import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function InputRow(props) {
  // tracks which input row element should be changed from a div to an input
  const [editMode, setEditMode] = useState(false);

  // keep track of counts per InputRow
  const [inputCountStore, setInputCountStore] = useState({
    qtyAvailable: 0,
    countIn: 0,
    add: 0,
    totalIn: 0,
    comp: 0,
    countOut: 0,
    totalSold: 0,
    gross: 0,
  });

  // get settlement status from redux store
  const { settledStatus } = useSelector((state) => state.settlement);

  // get poster info from redux store
  const { price, id } = useSelector((state) => state.poster);

  // destructure props to clean up code below
  const { size, setCountStore } = props;
  const {
    qtyAvailable,
    countIn,
    add,
    totalIn,
    comp,
    countOut,
    totalSold,
    gross,
  } = inputCountStore;

  // update inputCountStore when a value changes
  useEffect(() => {
    setInputCountStore((prevInputCountStore) => {
      return {
        ...prevInputCountStore,
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
    setCountStore,
    price,
    totalSold,
  ]);

  // update countStore when a value changes
  useEffect(() => {
    setCountStore((prevSetCountStore) => {
      return {
        ...prevSetCountStore,
        [size]: {
          totalIn: totalIn,
          comp: comp,
          countOut: +countOut,
          totalSold: totalSold,
          gross: gross,
        },
      };
    });
  }, [totalIn, comp, countOut, totalSold, gross, size, setCountStore]);

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

  // changes value in inputCountStore based on id and input element
  const updateValue = (e) => {
    // itemInfoArray = ['itemID', 'itemSize', 'inputElement']
    const itemInfoArray = e.target.id.split(":");
    setInputCountStore((prevInputCountStore) => {
      return { ...prevInputCountStore, [itemInfoArray[2]]: e.target.value };
    });
  };

  // all black-text, green-text, red-text elements below are conditionally rendered as inputs instead of divs based on the value of editMode in state
  // all other elements are just divs to display the value in the count grid
  return (
    <div className="input-row">
      <div className="input-element black-text size">{size}</div>
      <div className="input-element black-text">{qtyAvailable}</div>

      {editMode === `${id}:${size}:countIn` ? (
        <input
          id={`${id}:${size}:countIn`}
          placeholder={countIn}
          autoFocus
          onChange={updateValue}
          onBlur={removeEditMode}
        ></input>
      ) : (
        <div
          className="input-element black-text"
          id={`${id}:${size}:countIn`}
          onClick={enableEditMode}
        >
          {countIn}
        </div>
      )}

      {editMode === `${id}:${size}:add` ? (
        <input
          id={`${id}:${size}:add`}
          placeholder={add}
          autoFocus
          onChange={updateValue}
          onBlur={removeEditMode}
        ></input>
      ) : (
        <div
          className="input-element green-text"
          id={`${id}:${size}:add`}
          onClick={enableEditMode}
        >
          {add}
        </div>
      )}

      <div className="input-element blue-text">{totalIn}</div>

      {editMode === `${id}:${size}:comp` ? (
        <input
          id={`${id}:${size}:comp`}
          placeholder={comp}
          autoFocus
          onChange={updateValue}
          onBlur={removeEditMode}
        ></input>
      ) : (
        <div
          className="input-element red-text"
          id={`${id}:${size}:comp`}
          onClick={enableEditMode}
        >
          {comp}
        </div>
      )}

      {editMode === `${id}:${size}:countOut` ? (
        <input
          id={`${id}:${size}:countOut`}
          placeholder={countOut}
          autoFocus
          onChange={updateValue}
          onBlur={removeEditMode}
        ></input>
      ) : (
        <div
          className="input-element black-text"
          id={`${id}:${size}:countOut`}
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
