import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Stack,
} from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CartModal from "./CartModal";
import SnackbarUsage from "./SnackbarUsage";
import ReactConfetti from "react-confetti";
import useToolBar from "./hooks/useToolBar";

import FavModal from "./favModal";

function ToolBarUsage() {
  const {
    open,
    snack,
    cartToOpen,
    cartList,
    onHandleBuy,
    onHandleClean,
    onHandleCloseSnack,
    handleCloseModal,
    favList,
    openfav,
    onHandleCleanFav,
    favToOpen,
    handleCloseFav
  } = useToolBar();
  

  return (
    <>
      <AppBar position="static" color="transparent" sx={{minWidth: '450'}}>
        <Toolbar variant="regular" sx={{ display: "flex" }}>
          <IconButton
            edge="start"
            color="info"
            aria-label="menu"
            size="large"
            sx={{ mr: 1, fontSize: 100 }}
          >
            <StorefrontIcon />
          </IconButton>
          <Typography
            variant="h6"
            align="left"
            color="info"
            component="div"
            sx={{ flexBasis: 'auto', fontWeight: {sm:400, md:600 } }}
          >
            STORE
          </Typography>
          <Typography
            variant="h4"
            align="center"
            component="div"
            color="info"
            sx={{ flexGrow: 1, fontWeight: 600, fontSize:{xs: 20, md: 40}  }}
          >
            Welcome to Shopping Cart
          </Typography>

          <Stack direction="row">
            <IconButton
              size="large"
              aria-label="show favorite product"
              color="info"
              onClick={favToOpen}
              disabled={favList <= 0}
            >
              <Badge badgeContent={favList} color="secondary">
                {favList > 0 ? (
                  <FavoriteIcon fontSize="70" />
                ) : (
                  <FavoriteBorderIcon fontSize="70" />
                )}
              </Badge>              
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="info"
              onClick={cartToOpen}
              disabled={cartList <= 0}
            >
              <Badge badgeContent={cartList} color="warning">
                {cartList > 0 ? (
                  <ShoppingCartIcon fontSize="70" />
                ) : (
                  <ShoppingCartOutlinedIcon fontSize="70" />
                )}
              </Badge>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <CartModal
        open={open}
        handleClose={handleCloseModal}
        handleClean={onHandleClean}
        handleBuy={onHandleBuy}
      />
      <FavModal openFav={openfav} handleClose={handleCloseFav} handleRemoveFav={onHandleCleanFav}/>
      <SnackbarUsage handleCloseSnack={onHandleCloseSnack} open={snack} />
      {snack && <ReactConfetti gravity={1} numberOfPieces={150} />}
    </>
  );
}

export default ToolBarUsage;
