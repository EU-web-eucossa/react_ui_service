
import Products from 'components/Products';
import styles from '../styles/Home.module.css';
import React from 'react'

import { Container, Box, Stack, Typography, Button } from '@mui/material'
import { useAppDispatch } from 'state/hooks';
import { publicAxios } from 'api';
import { loadProductsError, loadProductsStart, loadProductsSuccess } from 'state/slices/productsSlice';

function Home() {
  document.title = "Shipment homepage"
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch(loadProductsStart())
        const response = await publicAxios.post('/api/v1/products', {}, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const products = response.data.data
        console.log(products);
        
        dispatch(loadProductsSuccess(products))

      } catch (error: any) {
        console.log(error.response);
        dispatch(loadProductsError())

      }
    }
    fetchProducts()
  }, [dispatch])
  return (
    <div className={styles.home}>
      <Box marginTop="5px"
        sx={{
          bgcolor: 'background.paper',
          mt: 4,
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
            SHIPPMENT
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus cumque necessitatibus consectetur iste reprehenderit sint impedit maiores expedita velit commodi mollitia, qui sunt dolorem debitis quia quasi sit quibusdam!
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">READ MORE</Button>

          </Stack>
        </Container>
      </Box>
      <Products />
    </div>
  )
}

export default Home