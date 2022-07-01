import { Card, Button, Box } from "@mui/material";
import { paymentAxios, productsAxios } from "api";
import CartItem from "components/CartItem";
import { Link } from "react-router-dom";
import { useAppSelector } from "state/hooks";
//import {ProductType} from "../state/slices/cartSlice";

function Cart() {
  const { user, cart } = useAppSelector(state => state.root)
  document.title = "Shipment cart page"
  const { items, totalAmount } = useAppSelector(
    (state) => state.root.cart
  );
  const placeOrder = async (e: any) => {
    e.preventDefault()
    try {

      const payload = { ...user.profile, items: [...cart.items], currency: "USD", total: cart.totalAmount }
      console.log(payload);
      
      const response = await productsAxios.post('/api/v1/orders', payload, {})
      console.log(response.data);
      
    } catch (err: any) {
      console.log(err.response);

    }

  }
  return (
    <div style={{ marginTop: "4rem", padding: "1rem" }}>
      <Card>
        {items.length === 0 ? (

          <Box sx={{ minHeight: "calc(100vh - 40px)", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "1rem" }}>
            <h1>Your cart is empty</h1>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button variant="contained" sx={{ padding: "10px 20px" }}>Continue Shopping</Button>
            </Link>
          </Box>
        ) : (
          <Card sx={{ minHeight: "calc(100vh - 40px)" }}>
            <h1>Your Shopping Items</h1>
            {items.map((prod) => {
              return <CartItem key={prod._id} {...prod} />;
            })}
            {/* Footer */}
            <Box sx={{ padding: 4 }}>
              <h4 style={{ marginRight: "40px", display: "flex" }}>
                Total:
                <span>$ {totalAmount.toFixed(2)}</span>
              </h4>
              <Link to="/order" style={{ textDecoration: "none", color: "#ffffff" }}>
                <Button style={{ backgroundColor: "orange" }} onClick={
                  placeOrder
                }>ORDER NOW</Button>
              </Link>
            </Box>
          </Card>
        )}

      </Card>
    </div>
  );
}
export default Cart;
