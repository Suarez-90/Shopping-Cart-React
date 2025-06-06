import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Paper, CardHeader, IconButton } from "@mui/material";

function CardProduct({
  title,
  img,
  price,
  description,
  handleClickCart,
  productInCart,
  handleClickFav,
  favProduct,
}) {
  const theme = useTheme();
  const query = useMediaQuery(theme.breakpoints.down("md"));


  const shortTitle = title?.split(" ", 3).join(" ");

  return (
    <Paper sx={{ maxWidth: { xs: 160, md: 230 } }} elevation={6}>
      <Card sx={{ backgroundColor: "#dafcfc" }}>
        <CardHeader
          subheader={shortTitle}
          sx={{ height: 65 }}
          action={
            <IconButton
              color="secondary"
              onClick={handleClickFav}
              aria-label="add to favorites"
            >
              {favProduct ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          }
        />
        <CardMedia
          component="img"
          alt="Images no Found"
          height="120"
          src={img}
        />
        <CardContent sx={{ textAlign: "left", maxHeight: 170 }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: {xs: "center",md:"start"}, flexWrap:'wrap', pb:{xs: 0.5, md:1} }}
          >
            <Typography
              noWrap
              gutterBottom
              variant="body1"
              component="div"
              fontWeight={600}
            >
              ${price}
            </Typography>
            <Rating
              emptyLabelText
              readOnly
              name="rating-product"
              defaultValue={1.5}
              precision={0.5}
              size={query ? "small" : "medium"}
              sx={{ mb:{xs:0}, justifyContent: "end" }}
            />
          </Stack>
          <Typography
            className="truncText"
            textAlign={{xs:'center', md: 'left'}}            
            variant={query? "caption": "body2"}
            sx={{
              color: "text.secondary",
              minHeight: 50,
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            color={productInCart ? "error" : "info"}
            size="small"
            startIcon={
              productInCart ? (
                <RemoveShoppingCartIcon />
              ) : (
                <AddShoppingCartIcon />
              )
            }
            sx={{ marginTop: -2 }}
            onClick={handleClickCart}
          >
            {productInCart ? "Remove" : "Add"} to Cart
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
}

export default CardProduct;
