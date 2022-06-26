
import { useDispatch } from 'react-redux';
import { Box, Card, Typography, CardActions, Button } from '@mui/material';
import { decrease, increase, remove } from '../state/slices/cartSlice';
import { DeleteOutlined } from '@mui/icons-material';
type Props={
    img: string,
    id:number,
    title:string,
    price:number,
    quantity:number
}
const CartItem = ({  id,img, title, price, quantity }:Props) => {
    const dispatch = useDispatch();
    return(
        <div>
            <Box>
                <img style={{width:"100px",heigth:"100px"}} src={img} alt="name" />
                <Card>
                    <Typography>{ title}</Typography>  
                    <Typography>{price}</Typography> 
                   
                    <CardActions>
                        <Button onClick={() => dispatch(remove(id))}>
                        <DeleteOutlined/>
                        </Button>
                        <Button onClick={()=>dispatch(decrease(quantity))}>-</Button>
                        <span>{quantity}</span>
                        <Button onClick={()=>dispatch(increase(quantity))}>+</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}
export default CartItem;