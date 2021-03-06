import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';

import { Loader } from '../Loader/Loader';
import { Cart } from '../Cart/Cart';
import { BasketList } from '../../components/BasketList/BasketList';
import { GoodsList } from '../../components/GoodsList/GoodsList';
import {Alert} from '../Alert/Alert'
import './Shop.css';

export const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [goods, setGoods] = useState([]);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);  
  };

  const addToBasket = (item) => {
    //если id совпадут я получу этот id чере findIndex
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      // товар добавляю впервые
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
      // товар добавляю впервые
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
    setAlertName(item.name);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(item => item.id !== itemId);
    setOrder(newOrder);
  }


  const incQuantity = (itemId) => {
    const newOrder = order.map(el => {
      if (el.id === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity
        }
      } else {
        return el
      }
    });
    setOrder(newOrder);
  }
 
  const decQuantity = (itemId) => {
    const newOrder = order.map(el => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 1 ? newQuantity : 1 
        }
      } else {
        return el
      }
    });
    setOrder(newOrder);
  }

  const closeAlert = () => {
    setAlertName('')
  }

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

  return (
    <main className='container content'>
      <Cart 
        quantity={order.length} 
        handleBasketShow={handleBasketShow} 
      />
      
        {loading ? (
        <Loader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      
      {
        isBasketShow && 
          <BasketList 
            order={order}
            handleBasketShow={handleBasketShow}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
      }

      {alertName && 
      <Alert 
        name={alertName} 
        closeAlert={closeAlert}
      />}
    </main>
  );
};
