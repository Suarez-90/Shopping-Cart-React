// import React from 'react'
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
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import FavModalContent from "./FavModalContent";

function FavModal({openFav, handleClose, handleRemoveFav }) {
  const theme = useTheme();
  const colorTitle = theme.palette.secondary.light
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={openFav}
      onClose={handleClose}
      aria-labelledby="responsive-fav-title"
      maxWidth='md'
    //   fullWidth
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
          <Typography sx={{ fontSize: 25, fontWeight: 600, color:colorTitle}}>
            {"Favorite Products"}
          </Typography>
          <Stack
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography color="secondary">{"CLEAN"}</Typography>
            <IconButton
              aria-label="remove"
              size="large"              
              onClick={handleRemoveFav}
            >
              <ClearAllIcon fontSize="inherit" color="error" />
              {/* <RemoveShoppingCartIcon color="error" fontSize="inherit" /> */}
            </IconButton>
          </Stack>
        </Stack>
      </DialogTitle>
      <DialogContent sx={{ mt: 1 }}>
        <FavModalContent themeColor={colorTitle}/>
      </DialogContent>
      <DialogActions>
        {/* <Button
          autoFocus
          variant="contained"
          color="warning"
          onClick={handleBuy}
          startIcon={<ShoppingCartCheckoutIcon />}
        >
          Buy Products
        </Button> */}
        <Button variant="outlined" color="error" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FavModal;
