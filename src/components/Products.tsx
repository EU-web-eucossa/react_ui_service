import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAppDispatch, useAppSelector } from "state/hooks"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { addProductToCart } from "state/slices/cartSlice";
import { Stack } from "@mui/material";


const theme = createTheme();
export default function Products() {

  const { products, loading } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()
  console.log(products);

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
          <Container sx={{ py: 8 }} maxWidth="lg">
            {<Grid container spacing={4}>
              {loading ? <Stack direction={'row'} justifyContent={"center"}>
                <Typography variant="h3" component={"h3"} textAlign="center">Loading...</Typography>
              </Stack> : products.map((product) => (
                <Grid item key={product._id} xs={12} sm={6} lg={4} sx={{ boxShadow: " 0 0 5rem -.2rem #00000" }}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      flexBasis: "18rem",
                      flexGrow: 1,
                      flexShrink: 0
                    }}
                  >
                    <CardMedia sx={{ height: "20rem" }}>
                      <img src={product.image.url} alt="" style={{ objectFit: "contain", width: "100%", height: "100%" }} />
                    </CardMedia>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: "medium", textAlign: "left" }}>
                        {product.name}
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "left" }} >$ {product.price.toFixed(2)}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" color="primary" fullWidth onClick={e => {
                        dispatch(addProductToCart({ ...product, quantity: 1, totalAmount: 1 }))
                      }}>ADD TO CART</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>}
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
