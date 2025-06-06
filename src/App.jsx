import { Container, Backdrop, CircularProgress } from "@mui/material";
import ToolBarUsage from "./components/ToolBarUsage";
import FiltersUsage from "./components/FiltersUsage";
import ListProducts from "./components/ListProducts";
import { FilterProvider } from "./components/context/filterContext";
import { CartProvider } from "./components/context/cartContext";
import { FavProvider } from "./components/context/favContext";
import { getProducts } from "./services/Products";
import { Suspense } from "react";

function App() {
  const listProduct = getProducts();
  return (
    <CartProvider>
      <FavProvider>
        <Container
          component="main"
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            gap: 1.5,
            minWidth: '390px'
          }}
        >
          <ToolBarUsage />
          <FilterProvider>
            <FiltersUsage />
            <Suspense
              fallback={
                <Backdrop
                  sx={(theme) => ({
                    color: "#fff",
                    zIndex: theme.zIndex.drawer + 1,
                  })}
                  open={true}
                >
                  <CircularProgress size={60} color="info" />
                </Backdrop>
              }
            >
              {listProduct && <ListProducts products={listProduct}/>}
            </Suspense>
          </FilterProvider>
        </Container>
      </FavProvider>
    </CartProvider>
  );
}

export default App;
