import { useState } from "react";
import { Stack, Box, Slider, Typography, Button, FormControl, Select, InputLabel, MenuItem  } from "@mui/material";

function FiltersUsage() {
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Stack
      spacing={{ xs: 2, sm: 2 }}
      direction="row"
      useFlexGap
      sx={{
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Typography id="non-linear-slider" gutterBottom>
        Price:{/* Storage: {valueLabelFormat(calculateValue(value))} */}
      </Typography>
      <Slider
        // value={value}
        min={0}
        step={1}
        max={100}
        // scale={calculateValue}
        // getAriaValueText={valueLabelFormat}
        // valueLabelFormat={valueLabelFormat}
        // onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
        color="secondary"
      />
      <Box>
        <Button sx={{ display: "block", mt: 2 }} onClick={handleOpen}>
          Open the select
        </Button>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Stack>
  );
}

export default FiltersUsage;
