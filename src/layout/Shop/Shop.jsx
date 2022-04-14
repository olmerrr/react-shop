import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';

import { Loader } from '../Loader/Loader';
import { Cart } from '../Cart/Cart';
import { BasketList } from '../BasketList/BasketList';
import { GoodsList } from '../../components/GoodsList';

import './Shop.css';

export const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [goods, setGoods] = useState([]);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

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
      console.log(newOrder)
    }
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  
  };

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
          />
      }
    </main>
  );
};
