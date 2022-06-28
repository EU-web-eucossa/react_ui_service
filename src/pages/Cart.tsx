import { Card, Button,Box } from "@mui/material";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useAppSelector } from "state/hooks";
//import {ProductType} from "../state/slices/cartSlice";

function Cart() {
  const { items, totalAmount } = useAppSelector(
    (state) => state.cart
  );
  return (
    <div>
      <Card>
       {items.length === 0 ? (
          
          <Box>
            <h1>Your cart is empty</h1>
            <Link to="/">
            <Button variant="contained">Continue Shopping</Button> 
            </Link>
          </Box>
        ) : (
          <Card>
            <h1>Your Shopping Items</h1>
        {items.map((prod) => {
          return <CartItem key={prod._id} {...prod} />;
           })} 
           <footer>
           <h4 style={{ marginRight: "40px", display: "flex" }}>
            Total:
            <span>{totalAmount.toFixed(2)}</span>
             </h4>
            <Link to="/order">
            <Button style={{ backgroundColor: "orange" }}>ORDER NOW</Button>
            </Link>
          </footer>
          </Card>
       )}
        
      </Card>
    </div>
  );
}
export default Cart;
