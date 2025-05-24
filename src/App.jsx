import { Container } from "@mui/material";
import ToolBarUsage from "./components/ToolBarUsage";
import FiltersUsage from "./components/FiltersUsage";
import ListProducts from "./components/ListProducts";
import { FilterProvider } from "./components/context/filterContext";

function App() {
  return (
    <>
      <Container
        component="main"
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <ToolBarUsage />
        <FilterProvider>
          <FiltersUsage />
          <ListProducts />
        </FilterProvider>
      </Container>
    </>
  );
}

export default App;
