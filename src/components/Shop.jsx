import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import CartList from './CartList';
import Alert from './Alert';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToCart = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {...item, quantity: 1,};
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => index === itemIndex 
        ? {...orderItem, quantity: orderItem.quantity + 1} 
        : orderItem);
      setOrder(newOrder);
    }
    
    setAlertName(item.name);
  };

  const toggleCartVisibility = () => {
    setCartVisible(!isCartVisible);
  };

  const removeFromCart = (id) => {
    const newOrder = order.filter((item) => item.id !== id);
    setOrder(newOrder);
  };

  const increaseQuantity = (id) => {
    const newOrder = order.map((item) => item.id === id 
      ? {...item, quantity: item.quantity + 1} 
      : item);
      setOrder(newOrder);
  };

  const decreaseQuantity = (id) => {
    const newOrder = order.map((item) => item.id === id 
      ? {...item, quantity: item.quantity = 0 ? item.quantity - 1 : 0} 
      : item);
      setOrder(newOrder);
  };

  const closeAlert = () => {
    setAlertName('');
  }

  useEffect(() => {
    fetch(API_URL, {
      headers: { 'Authorization': API_KEY }
    }).then((responce) => responce.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      })
  }, []);
  return (
  <main className='container content'>
    <Cart quantity={order.length} toggleCartVisibility={toggleCartVisibility}/>
    {loading ? <Preloader /> : <GoodsList goods={goods} addToCart={addToCart} />}
    {isCartVisible && <CartList 
      order={order} 
      toggleCartVisibility={toggleCartVisibility} 
      removeFromCart={removeFromCart} 
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
    />}
    {alertName && <Alert name={alertName} closeAlert={closeAlert}/>}
  </main>);
}

export default Shop;