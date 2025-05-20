import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Badge,
} from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function ToolBarUsage() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar variant="regular" sx={{display:'flex'}}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
        >
          <StorefrontIcon />
        </IconButton>
        <Typography variant="h6" align="left" color="inherit" component="div" sx={{flexGrow:1}}>
          STORE
        </Typography>

        <IconButton size="large" aria-label="show 4 new mails" color="inherit" sx={{alignContent:'end'}}>
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>        
      </Toolbar>
    </AppBar>
  );
}

export default ToolBarUsage;
