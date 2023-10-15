import "./LeatestProductCart.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineEye,
} from "react-icons/ai";

const LatestProductCart = ({ Product }) => {
  const { name, rating, img, price } = Product || {};
  return (
    <div className="cart">
      <img className="cart_img" src={img} alt="" />
      <div className="latest_cart_icons">
        <AiOutlineEye className="icon" size={28} />
        <AiOutlineHeart className="icon" size={28} />
        <AiOutlineShoppingCart className="icon" size={28} />
      </div>
      <div className="cart_content">
        <h3 className="text-[20px]">{name}</h3>
        <p className="text-left font-semibold text-[#a51016]">${price}</p>
        <div className="my-2 ">
          <Rating style={{ maxWidth: 70 }} value={rating} readOnly />
        </div>
      </div>
    </div>
  );
};

export default LatestProductCart;
