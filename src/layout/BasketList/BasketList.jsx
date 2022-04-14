import {BasketItem} from './BasketItem'
import './BasketList.css';

export const BasketList = (props) => {
  const { 
    order = [],
    handleBasketShow = Function.prototype, 
    removeFromBasket = Function.prototype 
  } = props;
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)
  return (
      <ul className='collection basket-list'>
        <li className='collection-item active title'>
          Your Cart
          <i 
            className='material-icons right close-icon'
            onClick={handleBasketShow}
            >clear
          </i>
        </li>
        
        { 
          order.length ? order.map(item => (
            <BasketItem 
              key={item.id} 
              {...item}
              removeFromBasket={removeFromBasket}
              />
          )) : <li className='collection-item'>Empty Cart</li>
        }
        
        <li className='collection-item active title'>
          Full Price: {totalPrice} $
        </li>
      </ul>
  );
};
