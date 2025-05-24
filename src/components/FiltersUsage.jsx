import { useState } from "react";
import { Stack, Box, Slider, Typography, Button, FormControl, Select, InputLabel, MenuItem  } from "@mui/material";

function FiltersUsage() {
  const [category, setCategory] = useState("all");
  // const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(0)

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleSelectChange = (event) => {
    setCategory(event.target.value);
  };
  console.log(category)

  return (
    <Stack
      spacing={{ xs: 2, sm: 2 }}
      direction="row"
      useFlexGap
      sx={{
        justifyContent: "space-around",
        alignItems: "center",      
      }}
    >
      <Box width={450} sx={{display:"flex", gap:2, alignContent:"center"}}>
        <Typography id="non-linear-slider" gutterBottom width={150} mt={0.2} fontWeight={500}>
          Initial Price:
        </Typography>
        <Slider
          min={0}
          step={5}
          max={1000}          
          value={price}          
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
          color="info"
        />
        <Typography variant="subtitle1"  gutterBottom mt={0.2} width={85} fontWeight={500}>
          $ {price}{/* Storage: {valueLabelFormat(calculateValue(value))} */}
        </Typography>
      </Box>
      <Box width={200}>        
        <FormControl color="info" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
          <Select
            labelId="controlled-open-select-label"
            id="controlled-open-select"
            autoWidth          
            value={category}
            label="Category"
            onChange={handleSelectChange}
          >            
            <MenuItem selected value='all'>All</MenuItem>
            <MenuItem value='laptops'>Laptops</MenuItem>
            <MenuItem value='moviles'>Móviles</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Stack>
  );
}

export default FiltersUsage;
