export const BasketItem = (props) => {
  const { 
    id, 
    name, 
    price, 
    quantity, 
    removeFromBasket, 
    incQuantity, 
    decQuantity
   } = props;
  
   return (
    <div>
      <li className='collection-item'>
        {name} 
        <i 
          className="material-icons close-icon basket-quantity" 
          onClick={()=>decQuantity(id)}
          >remove
        </i>
        
          x {quantity}
        
        <i 
          className="material-icons close-icon basket-quantity" 
          onClick={()=>incQuantity(id)}
          >add
        </i>
         
          {price * quantity} $
        
        
        <span className='secondary-content'>
          <i 
          className='material-icons close-icon' 
          onClick={() => removeFromBasket(id)}
          >close
          </i>
        </span>
      </li>
    </div>
  );
};
