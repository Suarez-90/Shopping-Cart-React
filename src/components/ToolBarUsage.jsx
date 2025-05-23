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
          color="secondary"
          aria-label="menu"
          size="large"
          sx={{ mr: 1 }}
        >
          <StorefrontIcon />
        </IconButton>
        <Typography
          variant="h6"
          align="left"
          color="secondary"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 600 }}
        >
          STORE
        </Typography>
        <Typography
          variant="h4"
          align="left"
          component="div"
          color="secondary"
          sx={{ flexGrow: 1, fontWeight: 600, fontSize: 40 }}
        >
          Welcome to Shopping Cart
        </Typography>

        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="secondary"
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
