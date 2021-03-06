import { BasketItem } from './BasketItem';
import './BasketList.css';

export const BasketList = (props) => {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <ul className='collection basket-list'>
      <li className='collection-item active title'>
        Your Cart
        <i
          className='material-icons right close-icon'
          onClick={handleBasketShow}
        >
          clear
        </i>
      </li>

      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        ))
      ) : (
        <li className='collection-item'>Empty Cart</li>
      )}
      
      {
       order.length && <div>
        <li className='collection-item active title'>
          Full Price: {totalPrice} $
        </li>
        <li className='collection-item center'>
          <button className='btn btn-small'>
            <b>Submit</b>
          </button>
        </li>
      </div>
      }
      
    </ul>
  );
};
