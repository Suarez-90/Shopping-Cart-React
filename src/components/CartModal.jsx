import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CartModalContent from "./CartModalContent";

function CartModal({ open, handleClose, handleClean,handleBuy }) {
    
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth="xl"
      disableEscapeKeyDown
    >
      <DialogTitle
        id="responsive-dialog-title"
        sx={{ backgroundColor: "#dafcfc" }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
            {"Products in the Cart"}
          </Typography>
          <Stack
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography color="error">{"CLEAN"}</Typography>
            <IconButton aria-label="remove" size="large" onClick={handleClean}>
              <RemoveShoppingCartIcon color="error" fontSize="inherit" sx={{mr:{xs:2}}} />
            </IconButton>
          </Stack>
        </Stack>
      </DialogTitle>
      <DialogContent sx={{ mt: 1, flexGrow:0 }}>
        <CartModalContent />
      </DialogContent>
      <DialogActions sx={{pr:{xs:5}}}>
        <Button
          autoFocus
          variant="contained"
          color="warning"
          onClick={handleBuy}
          startIcon={<ShoppingCartCheckoutIcon />}
        >
          Buy Products
        </Button>
        <Button variant="outlined" color="error" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CartModal;
