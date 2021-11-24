import { useState } from "react";
import { useSelector } from "react-redux";
import {
  FaPlus,
  FaBoxOpen,
  FaShoppingCart,
  FaExclamationCircle,
} from "react-icons/fa";

function ProductDisplay(props) {
  // track if user is hovering over exclamation to display note
  const [noteHover, setNoteHover] = useState(false);

  // get poster info from redux store
  const { price, imgUrl, note } = useSelector((state) => state.poster);

  return (
    <div className="product-display">
      <div className="left-product-display">
        <div className="product-label">Poster</div>
        {/* if a note exist show exclamation indicator for note on hover */}
        {note === "" ? null : (
          <FaExclamationCircle
            className="poster-note-notification"
            onMouseEnter={() => {
              setNoteHover(true);
            }}
            onMouseLeave={() => {
              setNoteHover(false);
            }}
          />
        )}
        <img className="product-image" src={imgUrl} alt="Concert Poster" />
        {/* display poster note if it exists and user hovers on exclamation indicator */}
        {noteHover ? (
          <div className="poster-note">
            <div className="poster-note-arrow-up"></div>
            <p>{note}</p>
          </div>
        ) : null}
        <div className="icons">
          <FaPlus />
          <FaBoxOpen />
          <FaShoppingCart />
        </div>
      </div>
      <div className="right-product-display">
        <p className="price">${parseFloat(price).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductDisplay;
