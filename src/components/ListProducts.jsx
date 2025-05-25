import Products from "./mocks/mocks.json";
import CardProduct from "./CardProduct";
import Grid from "@mui/material/Grid";
import useFilter from "./hooks/useFilter";
import useCart from "./hooks/useCart";

function ListProducts() {
  const { filterProducts } = useFilter();
  const { addToCart, removeCart, state } = useCart();

  const productsFilters = filterProducts(Products);
  return (
    <Grid container spacing={0.5}>
      <Grid
        size={10}
        container
        direction="row"
        sx={{ justifyContent: "start", alignItems: "center", gap: 1.4 }}
      >
        {productsFilters.map((product) => {
          const productInCart = state.findIndex((item) => item.id === product.id)>=0;
          return (
            <CardProduct
              key={product.id}
              title={product.title}
              img={product.image}
              description={product.description}
              price={product.price}
              productInCart={productInCart}
              handleClick={productInCart ? ()=>removeCart(product.id) : () => addToCart(product) }
            />
          );
        })}
      </Grid>
      <Grid size={2} sx={{ border: 0.5 }}></Grid>
    </Grid>
  );
}

export default ListProducts;
