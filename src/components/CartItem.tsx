//import {React } from 'react'
import { useAppDispatch } from "state/hooks";
import { Box, Card, Typography, CardActions, Button } from "@mui/material";
import {
  ProductType,
  addProductToCart,
  removeFromCart,
  reduceCartItemQuantity,
} from "state/slices/cartSlice";
import { DeleteOutlined } from "@mui/icons-material";

const CartItem = ({_id,...props}: ProductType) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Box>
        <img
          style={{ width: "100px", height: "100px" }}
          src={props.image.url}
          alt="name"
        />
        <Card>
          <Typography>{props.name}</Typography>
          <Typography>Sub total: {props.price?.toFixed(2)}*{props.quantity} = $ {props.totalAmount.toFixed(2)}</Typography>

          <CardActions>
            <Button
              onClick={() => dispatch(removeFromCart({ _id:_id! }))}
            >
              <DeleteOutlined />
            </Button>
            <Button
              onClick={() =>
                dispatch(reduceCartItemQuantity({ _id: _id! }))
              }
              {...props.quantity>1?{disabled:false}:{disabled:true}}
            >
              -
            </Button>
            <span>{props.quantity}</span>
            <Button
              onClick={() =>
                dispatch(addProductToCart({...props,_id,quantity:1}))
              }
            >
              +
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};
export default CartItem;
