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
        <AiOutlineEye className="icon" />
        <AiOutlineHeart className="icon" />
        <AiOutlineShoppingCart className="icon" />
      </div>
      <div className="cart_content  w-full ">
        <h3 className="md:text-[20px] text-[14px] text-left">{name}</h3>
        <p className="text-left md:font-semibold text-[#a51016] md:text-[17px] text-[12px]">
          ${price}
        </p>
        <div className="my-2 ">
          <Rating style={{ maxWidth: 60 }} value={rating} readOnly />
        </div>
      </div>
    </div>
  );
};

export default LatestProductCart;
