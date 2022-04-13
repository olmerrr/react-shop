import './GoodsItem';

export const GoodsItem = (props) => {
  const { id, name, description, price, full_background, addToBasket = Function.prototype} = props;
  return (
    <div>
      <div className='card'>
        <div className='card-image'>
          <img src={full_background} alt={name} />
        </div>
        <div className='card-content'>
          <span className='card-title'>{name}</span>

          <p className='card-description'>{description}</p>
        </div>
        <div className='card-action'>
          <button 
            className='btn'
            onClick={() => addToBasket({
              id,
              name,
              price
            })}
            >Buy</button>
          <span className='right card-price'>{price} $</span>
        </div>
      </div>
    </div>
  );
};
