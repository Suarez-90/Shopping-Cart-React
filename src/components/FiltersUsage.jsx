import {
  Stack,
  Box,
  Slider,
  Typography,
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import useFilter from "./hooks/useFilter";
import { useId } from "react";

function FiltersUsage() {
  const {filter, setFilter } = useFilter();
  const labelId = useId();

  const handlePriceChange = (event) => {
    setFilter({... filter,price: event.target.value});
  };
  const handleSelectChange = (event) => {
    setFilter({... filter, category:event.target.value});
  };

  return (
    <Stack
      width={{xs:'450px',md: 'auto'}}
      spacing={{ xs: 1, sm: 2 }}
      direction={{xs:'column', md:"row"}}
      useFlexGap
      sx={{
        justifyContent: {xs: 'center',md:"space-around"},
        alignItems: "center",        
      }}
    >
      <Box width={{xs:350, md: 450}} sx={{ display: "flex", gap: {xs: 1, md: 2}, alignItems: "center" }}>
        <Typography
          id="non-linear-slider"
          gutterBottom
          width={{xs:200 ,md:250}}
          mt={0.2}
          fontWeight={500}
        >
          Initial Price:
        </Typography>
        <Slider
          min={0}
          step={5}
          max={1000}
          value={filter.price}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
          color="info"
        />
        <Typography
          variant="subtitle1"
          gutterBottom
          mt={0.2}
          width={85}
          fontWeight={500}
        >
          $ {filter.price}
        </Typography>
      </Box>
      <Box>
        <FormControl color="info" sx={{ m: 1, minWidth:{xs:250, md:200} }}>
          <InputLabel id={labelId}>
            Category
          </InputLabel>
          <Select
            labelId={labelId}
            id="select category"
            autoWidth
            value={filter.category}
            label="Category"
            onChange={handleSelectChange}
          >
            <MenuItem selected value="all">
              All
            </MenuItem>
            <MenuItem value="electronics">Electronics</MenuItem>
            <MenuItem value="men's clothing">Men's Clothing</MenuItem>
            <MenuItem value="women's clothing">Women's Clothing</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Stack>
  );
}

export default FiltersUsage;
