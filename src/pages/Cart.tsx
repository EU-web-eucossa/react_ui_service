import  { useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { getCartTotal } from 'state/slices/cartSlice';
import CartItem from '../components/CartItem';

function Cart() {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal);
  });
  return (
    <div>
      {items.map((item)=>{
        return <CartItem key={item.id} {...item}/>
      })}
      <footer>
        <h4 style={{marginRight:"40px",display:"flex"}}>Total:
          <span>{totalAmount}</span>
        </h4>
      </footer>
      <button>Clear All</button>
    </div>
  )
}
export default Cart