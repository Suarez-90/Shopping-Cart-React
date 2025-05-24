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
        >
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default ToolBarUsage;
