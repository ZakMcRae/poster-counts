import { useState } from "react";
import {
  FaPlus,
  FaBoxOpen,
  FaShoppingCart,
  FaExclamationCircle,
} from "react-icons/fa";

function ProductDisplay(props) {
  const [noteHover, setNoteHover] = useState(false);
  const { price, imgUrl, description } = props.posterInfo;

  return (
    <div className="product-display">
      <div className="left-product-display">
        {/* if a description/note exist show exclamation indicator for note on hover */}
        {description === "" ? null : (
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
            <p>{description}</p>
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
