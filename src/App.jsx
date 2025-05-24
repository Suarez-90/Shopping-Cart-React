import { Container } from "@mui/material";
import ToolBarUsage from "./components/ToolBarUsage";
import FiltersUsage from "./components/FiltersUsage";
import ListProducts from "./components/ListProducts";


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
        <FiltersUsage />
        <ListProducts/>
        
      </Container>
    </>
  );
}

export default App;
