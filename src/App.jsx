import { Container } from "@mui/material";
import ToolBarUsage from "./components/ToolBarUsage";
import FiltersUsage from "./components/FiltersUsage";

function App() {
  return (
    <Container component="main" sx={{ textAlign: "center", display: "flex", flexDirection:'column', gap:4 }}>
      <ToolBarUsage />
      <FiltersUsage />
    </Container>
  );
}

export default App;
