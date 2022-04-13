import './Cart.css';
export const Cart = (props) => {
  const { quantity = 0 } = props;
  return (
    <div className='cart blue darken-4 white-text'>
      <i className='material-icons'>shopping_basket</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  );
};
