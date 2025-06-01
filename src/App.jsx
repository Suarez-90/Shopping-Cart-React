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
            gap: 1,
            // minWidth: 450,
            minHeight: '100dvh'
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
                  // onClick={handleClose}
                >
                  <CircularProgress size={60} color="warning" />
                </Backdrop>
              }
            >
              <ListProducts products={listProduct}/>
            </Suspense>
          </FilterProvider>
        </Container>
      </FavProvider>
    </CartProvider>
  );
}

export default App;
