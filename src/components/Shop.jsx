import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';

import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import CartList from './CartList';
import Alert from './Alert';
import { ShopContext } from '../context';

const Shop = () => {
  const {setGoods, loading, order, isCartVisible, alertName} = useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: { 'Authorization': API_KEY }
    }).then((responce) => responce.json())
      .then((data) => {
        setGoods(data.shop);
      })
      // eslint-disable-next-line
  }, []);
  return (
  <main className='container content'>
    <Cart quantity={order.length} />
    {loading ? <Preloader /> : <GoodsList />}
    {isCartVisible && <CartList />}
    {alertName && <Alert />}
  </main>);
}

export default Shop;