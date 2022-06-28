//import {React } from 'react'
import { useAppDispatch } from "state/hooks";
import { Box, Card, Typography, CardActions, Button } from "@mui/material";
import {
  ProductType,
  addProductToCart,
  removeFromCart,
  reduceCartItemQuantity,
} from "../state/slices/cartSlice";
import { DeleteOutlined } from "@mui/icons-material";

const CartItem = (props: ProductType) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Box>
        <img
          style={{ width: "100px", height: "100px" }}
          src={props.url}
          alt="name"
        />
        <Card>
          <Typography>{props.name}</Typography>
          <Typography>{props.price}</Typography>

          <CardActions>
            <Button
              onClick={() => dispatch(removeFromCart({ _id: props._id }))}
            >
              <DeleteOutlined />
            </Button>
            <Button
              onClick={() =>
                dispatch(reduceCartItemQuantity({ _id: props._id }))
              }
            >
              -
            </Button>
            <span>1</span>
            <Button
              onClick={() =>
                dispatch(addProductToCart({ quantity: props.quantity }))
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
