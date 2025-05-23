import { Container, Grid } from "@mui/material";
import ToolBarUsage from "./components/ToolBarUsage";
import FiltersUsage from "./components/FiltersUsage";
import CardProduct from "./components/CardProduct";

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
          // minHeight:'100%'
        }}
      >
        <ToolBarUsage />
        <FiltersUsage />
        <Grid container spacing={0.5}>
          <Grid size={10} container direction='row' sx={{justifyContent:"start", alignItems:"center", gap:1.2, border: 2}}>
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </Grid>
          <Grid size={2} sx={{ border: 2 }}></Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
