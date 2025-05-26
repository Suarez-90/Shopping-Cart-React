import { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Badge } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartModal from "./CartModal";
import useCart from "./hooks/useCart";
import SnackbarUsage from "./SnackbarUsage";
import ReactConfetti from "react-confetti";

function ToolBarUsage() {
  const [open, setOpen] = useState(false);
  const [snack, setSnack] = useState(false)
  const {state, clearCart} = useCart()
  const cartList = state.length

  const onHandleClean = ()=>{
    clearCart();
    handleCloseModal();
    
  }
  const onHandleBuy = ()=>{
    clearCart()
    handleCloseModal()
    handleClickSnack()    
  }
  const cartToOpen = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleClickSnack = () => {
    setSnack(true);
  };

  const onHandleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnack(false);
  };

  return (
    <>
      <AppBar position="static" color="transparent">
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
            sx={{ flexGrow: 1, fontWeight: 600 }}
          >
            STORE
          </Typography>
          <Typography
            variant="h4"
            align="left"
            component="div"
            color="info"
            sx={{ flexGrow: 1, fontWeight: 600, fontSize: 40 }}
          >
            Welcome to Shopping Cart
          </Typography>

          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="info"
            onClick={cartToOpen}
            disabled={cartList<=0}
          >
            <Badge badgeContent={cartList } color="error">
              {cartList>0 ? <ShoppingCartIcon fontSize="70" />: <ShoppingCartOutlinedIcon fontSize="70"/> }
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <CartModal open={open} handleClose={handleCloseModal} handleClean={onHandleClean} handleBuy={onHandleBuy}/>
      <SnackbarUsage handleCloseSnack={onHandleCloseSnack} open={snack}/>
      {snack && <ReactConfetti gravity={1}/>}
    </>
  );
}

export default ToolBarUsage;
