import { Container, Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import ButtonUsage from "./components/ButtonUsage";
import ToolBarUsage from "./components/ToolBarUsage";

function App() {
  return (
    <>
      {/* <CssBaseline /> */}
      <Container component="main" sx={{ textAlign: "center" }}>        
        <ToolBarUsage />
        <Typography
          variant="h2"
          component="h1"
          color="info"
          sx={{ mt: 3, fontWeight: 300 }}
        >
          Shopping Cart React
        </Typography>

        <ButtonUsage />
      </Container>
    </>
  );
}

export default App;
