import React from 'react';
import {IconButton,Stack,AppBar,Toolbar,Typography ,CssBaseline} from '@mui/material';
import {Link} from 'react-router-dom'
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppSelector } from 'state/hooks';
//import {useSelector } from 'react-redux';
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 0,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
function Navbar() {
  const {totalAmount,quantity}=useAppSelector(state=>state.root.cart)
  return (
    <div style={{position:"sticky",top:0,zIndex:'1020'}}>
      <CssBaseline/>
      <AppBar >
        <Toolbar >
          <Link to={"/"} color="white" style={{textDecoration:"none"}}>
          <Typography variant="h6" color="#ffffff" noWrap>
           Shipment homepage
          </Typography>
          </Link>
           <Stack spacing={4} direction="row" justifyContent={"flex-end"} sx={{ color: 'action.active',flex:"1",alignItems:"center" }}>
           {quantity>=1&&(<Typography sx={{fontWeight:"bold",color:"#ffffff"}}>Total: $ {totalAmount.toFixed(2)}</Typography>)}
            <Link to='/cart'>
               <IconButton aria-label="cart">
              <StyledBadge badgeContent={quantity
              } color="secondary" showZero>
               <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            </Link>
          </Stack>  
        </Toolbar>
      </AppBar>
    </div>
   
  )
}

export default Navbar