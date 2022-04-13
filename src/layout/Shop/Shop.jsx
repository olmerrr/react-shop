import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';

import { Loader } from '../Loader/Loader';
import { Cart } from '../Cart/Cart';
import { GoodsList } from '../../components/GoodsList';

import './Shop.css';

export const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [goods, setGoods] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(function getGoads() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => {
      return orderItem.id === item.id;
    });

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };

      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  return (
    <main className='container content'>
      <Cart quantity={order.length} />
      {loading ? <Loader /> : 
      <GoodsList 
      goods={goods} 
      addToBasket={addToBasket}
      />}
    </main>
  );
};
