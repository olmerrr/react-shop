export const BasketItem = (props) => {
  const { id, name, price, quantity } = props;
  return (
    <div>
      <li className='collection-item'>
        {name} x {quantity} = {price}
        <span className='secondary-content'>
          <i className='material-icons close-icon'>remove</i>
        </span>
      </li>
    </div>
  );
};
