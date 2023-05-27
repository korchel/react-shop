const CartItem = (props) => {
  const {
    id, 
    name, 
    price, 
    quantity, 
    removeFromCart=Function.prototype,
    increaseQuantity=Function.prototype,
    decreaseQuantity=Function.prototype,
  } = props;
  return (
    <li className="collection-item">
      {name} x <i className="material-icons change-quantity" onClick={() => decreaseQuantity(id)}>
        remove
      </i> 
      {quantity} 
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