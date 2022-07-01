//import {React } from 'react'
import { useAppDispatch } from "state/hooks";
import { Box, Card, Typography, CardActions, Button, ButtonGroup } from "@mui/material";
import {
  ProductType,
  addProductToCart,
  removeFromCart,
  reduceCartItemQuantity,
} from "state/slices/cartSlice";
import { DeleteOutline } from "@mui/icons-material";

const CartItem = ({_id,...props}: ProductType) => {
  const dispatch = useAppDispatch();

  return (
      <Box sx={{display:"flex",gap:".5rem"}}>
        <img
          style={{ width: "10rem", height: "10rem" }}
          src={props.image.url}
          alt="name"
        />
        <Card sx={{p:2}}>
          <Typography variant="h4" component="h4" sx={{fontWeight:"bold"}}>{props.name}</Typography>
          <Typography>Quantity {props.quantity} </Typography>
          <Typography>Unit price: $ {props.price!.toFixed(2)}</Typography>
          <Typography>Total: $ {props.totalAmount.toFixed(2)}</Typography>

          <CardActions sx={{gap:5}}>
            <Button
            sx={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#dd0000"}}
              onClick={() => dispatch(removeFromCart({ _id:_id! }))}
              variant="contained"
              >
              <DeleteOutline htmlColor="white"/> <span>Remove</span>
            </Button>
              <ButtonGroup>

            <Button
             variant="contained"
              onClick={() =>
                dispatch(reduceCartItemQuantity({ _id: _id! }))
              }
              {...props.quantity>1?{disabled:false}:{disabled:true}}
            >
              -
            </Button>
            <Button style={{fontSize:"1rem"}}>{props.quantity}</Button>
            <Button
              onClick={() =>
                dispatch(addProductToCart({...props,_id,quantity:1}))
              }
              variant="contained"
              
              >
              +
            </Button>
              </ButtonGroup>
          </CardActions>
        </Card>
      </Box>
  );
};
export default CartItem;
