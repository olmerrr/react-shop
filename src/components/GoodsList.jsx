import {GoodsItem} from './GoodsItem'
import './GoodsList.css'

export const GoodsList = (props) => {
  const {goods = []} = props;
  
  if (!goods.length) {
    return <h3>Nothing..</h3>
  }
  return <div className='goods'>
     {
       goods.map((good) => (
          <GoodsItem 
            key={good.id} 
            {...good}
          />
       ))
     }
  </div>
}