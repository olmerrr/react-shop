import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';

import { Loader } from '../Loader/Loader';
import { GoodsList } from '../../components/GoodsList';

import './Shop.css';

export const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [goods, setGoods] = useState([]);

  useEffect(function getGoads() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);
  
  return (
    <main className='container content'>
      {loading ? <Loader /> : <GoodsList goods={goods}/>}
    </main>
  );
};
