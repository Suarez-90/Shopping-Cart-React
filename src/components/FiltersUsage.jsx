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
      spacing={{ xs: 2, sm: 2 }}
      direction="row"
      useFlexGap
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box width={450} sx={{ display: "flex", gap: 2, alignContent: "center" }}>
        <Typography
          id="non-linear-slider"
          gutterBottom
          width={150}
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
      <Box width={200}>
        <FormControl color="info" sx={{ m: 1, minWidth: 120 }}>
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
