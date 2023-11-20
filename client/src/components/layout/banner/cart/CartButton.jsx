import React from "react";
import { ROUTES } from "../../../../router/Routes";
import { useNavigate } from "react-router-dom";

const img_data = {
  red: "/assets/images/Cart.png",
  white: "/assets/images/CartWhite.png"
}


function CartButton(props) {
  const nav = useNavigate();

  const src = props.location === "/Recipe" ? img_data.white : img_data.red;
  
  const handleClick = () => {
    nav(ROUTES.CART.path);
  };

  return (
    <div>
      <img src={src} onClick={handleClick} />
    </div>
  );
}
export default CartButton;
