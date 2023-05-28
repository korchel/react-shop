import { useContext } from "react";
import { ShopContext } from "../context";

const Cart = (props) => {
  const {
    order, 
    toggleCartVisibility = Function.prototype, 
  } = useContext(ShopContext);

  return (
    <div className="cart blue darken-4 white-text" onClick={toggleCartVisibility}>
      <i className="material-icons">shopping_cart</i>
      {order.length ? <span className="cart-quantity">{order.length}</span> : null}
    </div>
  )
};

export default Cart;