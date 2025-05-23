import Products from './mocks/mocks.json';
import CardProduct from './CardProduct'
import Grid from "@mui/material/Grid";

function ListProducts() {
  return (
    <Grid container spacing={0.5}>
      <Grid
        size={10}
        container
        direction="row"
        sx={{ justifyContent: "start", alignItems: "center", gap: 1.4 }}
      >
        {Products.map(product => {
           return <CardProduct key={product.id} title={product.title} img={product.image} description={product.description} price={product.price}/>
        })}
        
      </Grid>
      <Grid size={2} sx={{ border: 0.5 }}></Grid>
    </Grid>
  );
}

export default ListProducts;
