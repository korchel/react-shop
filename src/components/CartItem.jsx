import { useContext } from "react";
import { ShopContext } from "../context";

const CartItem = (props) => {
  const {
    id, 
    name, 
    price, 
    quantity,
  } = props;
  const {removeFromCart, increaseQuantity, decreaseQuantity} = useContext(ShopContext);

  return (
    <li className="collection-item">
      {name} x {quantity} <i className="material-icons change-quantity" onClick={() => decreaseQuantity(id)}>
        remove
      </i> 
      <i className="material-icons change-quantity" onClick={() => increaseQuantity(id)}>
        add
      </i> = {price * quantity}
      <span className='secondary-content' onClick={() => removeFromCart(id)}>
        <i className="material-icons cart-delete">close</i>
      </span>
    </li>
  )
};

export default CartItem;