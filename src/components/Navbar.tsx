import React from 'react';
import {IconButton,Stack,AppBar,Toolbar,Typography ,CssBaseline} from '@mui/material';
import {Link} from 'react-router-dom'
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
  
  return (
    <div className="header">
      <CssBaseline/>
      <AppBar position="relative">
        <Toolbar >
          <Typography variant="h6" color="inherit" noWrap>
            WEB2 ONLINE SHOP
          </Typography>
           <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
            {/* <Box  display="flex" alignItems="center"justifyContent="center" position="relative">
              <TextField
              sx={{
                input:{
                  fontWeight:"600",
                  border:"none"
                  
                },
                width:{lg:"400px",xs:"50px"},
                backgroundColor:"#fff"
                
              }}
                placeholder="Search product"
                type="text"
               />
               <Button variant="contained" sx={{
                backgroundColor:"#ff2625",
                color:"#fff",
                height:"50px"
               }}>Search</Button>
            </Box> */}
            <Link to='/cart'>
               <IconButton aria-label="cart">
              <StyledBadge badgeContent={0} color="secondary"showZero>
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