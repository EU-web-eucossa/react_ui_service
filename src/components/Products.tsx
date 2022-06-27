import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
//import { PayloadAction } from "@reduxjs/toolkit";
//import { addProductToCart,ProductType } from '../state/slices/cartSlice';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import data from "../products";
//import { useAppDispatch } from "state/hooks"
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import { IProductEntity } from "state/interface";


const theme = createTheme();
export default function Products(){
  
  
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
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
            >
              OUR PRODUCTS
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              temporibus cumque necessitatibus consectetur iste reprehenderit
              sint impedit maiores expedita velit commodi mollitia, qui sunt
              dolorem debitis quia quasi sit quibusdam!
            </Typography>
          </Container>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {data.map((item) => (
                <Grid item key={item._id} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia component="image">
                      <img src={item.url} alt="" />
                    </CardMedia>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                      </Typography>
                      <Typography variant="h5" paragraph>{item.description}</Typography>
                      <Typography variant="h5">KSh:{item.price}</Typography>
                      <Stack spacing={1}>
                        <Rating
                          name="size-small"
                          defaultValue={2}
                          size="small"
                        />
                      </Stack>
                    </CardContent>
                    <CardActions>
                      <Button >ADD TO CART</Button>
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
