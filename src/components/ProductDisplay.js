import { FaPlus, FaBoxOpen, FaShoppingCart } from "react-icons/fa";

function ProductDisplay(props) {
  const { price, imgUrl } = props.posterInfo;

  return (
    <div className="product-display">
      <div className="left-product-display">
        <p>Poster</p>
        <img className="product-image" src={imgUrl} alt="Concert Poster" />
        <div className="icons">
          <FaPlus />
          <FaBoxOpen />
          <FaShoppingCart />
        </div>
      </div>
      <div className="right-product-display">
        <p className="price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductDisplay;
