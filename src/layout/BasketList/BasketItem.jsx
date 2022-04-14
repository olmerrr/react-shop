export const BasketItem = (props) => {
  const { id, name, price, quantity, removeFromBasket } = props;
  return (
    <div>
      <li className='collection-item'>
        {name} x {quantity} = {price * quantity} $
        <span className='secondary-content'>
          <i className='material-icons close-icon' onClick={() => removeFromBasket(id)}>remove</i>
        </span>
      </li>
    </div>
  );
};
