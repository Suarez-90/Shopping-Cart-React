import Products from "./mocks/mocks.json";
import CardProduct from "./CardProduct";
import Grid from "@mui/material/Grid";
import useFilter from "./hooks/useFilter";
import useCart from "./hooks/useCart";
import useFav from "./hooks/useFav";

function ListProducts() {
  const { filterProducts } = useFilter();
  const { addToCart, removeCart, state } = useCart();
  const { fav, add_fav, remove_fav } = useFav();
  console.log({fav})
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
          const productInFav = fav?.some(item=> item.id === product.id);
          // console.log(productInFav)
          return (
            <CardProduct
              key={product.id}
              title={product.title}
              img={product.image}
              description={product.description}
              price={product.price}
              productInCart={productInCart}
              handleClickCart={productInCart ? ()=>removeCart(product.id) : () => addToCart(product) }
              favProduct={productInFav}
              handleClickFav={productInFav? ()=>remove_fav(product.id): ()=>add_fav(product)}
            />
          );
        })}
      </Grid>
      <Grid size={2} sx={{ border: 0.5 }}></Grid>
    </Grid>
  );
}

export default ListProducts;
