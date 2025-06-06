import CardProduct from "./CardProduct";
import Grid from "@mui/material/Grid";
import useFilter from "./hooks/useFilter";
import useCart from "./hooks/useCart";
import useFav from "./hooks/useFav";
import ItemsListRate from "./ItemsListRate";
import { use } from "react";



function ListProducts({products}) {
  const { filterProducts, filterMoreRate } = useFilter();
  const { addToCart, removeCart, state } = useCart();
  const { fav, add_fav, remove_fav } = useFav();
  const productsApi = use(products)
  
  const productsFilters = filterProducts(productsApi)
  const productsFiltersRate = filterMoreRate(productsApi)

  return (
    <Grid container spacing={0.5} sx={{flex:'1 0 auto', display:'flex', flexDirection:{md:'column', lg: 'row'}, alignContent:{xs:'center'}}}>
      <Grid
        size={{xs:12 ,md:10}}
        container
        direction="row"        
        sx={{ justifyContent: "center", alignItems: "start", gap: 1}}
      >
        {productsFilters.map((product) => {
          const productInCart = state.findIndex((item) => item.id === product.id)>=0;
          const productInFav = fav?.some(item=> item.id === product.id);
          
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
      <Grid size={{xs:12,md:10 ,lg:2}} minWidth={180} alignSelf={{xs:'center',md:'center', lg:'flex-start'}} >        
       <ItemsListRate productRate={productsFiltersRate}/>
      </Grid>
    </Grid>
  );
}

export default ListProducts;
