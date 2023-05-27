import CartItem from "./CartItem";

const CartList = (props) => {
  const {order=[], 
    toggleCartVisibility = Function.prototype,
    removeFromCart = Function.prototype,
    increaseQuantity = Function.prototype,
    decreaseQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (
    <ul className="collection cart-list">
      <li className="collection-item active">Корзина</li>
      {
        order.length ? order.map((item) => (
          <CartItem 
            key={item.id} 
            {...item} 
            removeFromCart={removeFromCart} 
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        )) : <li className="collection-item active">Карзина пуста</li>
      }        
      <li className="collection-item active">
        Общая стоимость: {totalPrice} руб.
      </li>
      <li className="collection-item">
        <button className="btn btn-small">Оформить</button>
      </li>
      <i className="material-icons cart-close" onClick={toggleCartVisibility}>close</i>
    </ul>
  )
};

export default CartList;