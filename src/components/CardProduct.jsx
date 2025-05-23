import React from "react";
import  imagen  from "../assets/shopping-store.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

function CardProduct() {
  return (
    <Paper sx={{ maxWidth: 230}} elevation={3}>
        {/* <Card sx={{backgroundColor:'#b599f0'}}> */}
        <Card sx={{backgroundColor: '#c8a8e9'}}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            src={imagen}
          />
          <CardContent sx={{textAlign:"left"}}>
            <Typography  gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
    </Paper>
  );
}

export default CardProduct;
