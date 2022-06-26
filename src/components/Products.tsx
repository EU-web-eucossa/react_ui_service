import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { AddToCart } from '../state/slices/cartSlice';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import data from '../products';
import { useDispatch } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
type Props={}

const theme = createTheme();
export default function Products(props:Props) {
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
          >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              OUR PRODUCTS
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus cumque necessitatibus consectetur iste reprehenderit sint impedit maiores expedita velit commodi mollitia, qui sunt dolorem debitis quia quasi sit quibusdam!
            </Typography>
          </Container>
          <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {data.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                 >
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography>
                      {item.price}
                    </Typography>
                    <Stack spacing={1}>
                      <Rating name="size-small" defaultValue={2} size="small" />
                      <Rating name="size-medium" defaultValue={2} />
                      <Rating name="size-large" defaultValue={2} size="large" />
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <Button  onClick={()=>dispatch(AddToCart(item))} >ADD TO CART</Button>
                    <Button  >ORDER NOW</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Box>
        
      </main>
      
    </ThemeProvider>
  );
}