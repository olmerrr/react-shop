import { useEffect } from 'react';
import './Alert.css';

export const Alert = ({ name = '', closeAlert = Function.prototype }) => {
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => {
      clearTimeout(timerId);
    };
    //  eslint-disable-next-line
  }, [name]);

  return (
    <div id='toast-continer' className='toast-continer'>
      <div className='toast'>{name} added to Cart</div>
    </div>
  );
};
