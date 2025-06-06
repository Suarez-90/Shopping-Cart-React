import Paper from "@mui/material/Paper";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  ButtonGroup,
  Avatar
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useCart from "./hooks/useCart";


function CartModalContent() {
  const { removeCart, restToQty, state, addToCart, totalPrice } = useCart(); 

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth:{xs:700, md: 1000}, backgroundColor: "#dafcfc" }}
        aria-label="spanning table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
            <TableCell align="center">Option</TableCell>
            <TableCell align="center">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{display:"flex", alignItems:"center",gap:2}}>
                <Avatar
                    alt={row.title}
                    src={row.image}
                    sx={{ width: 48, height: 48 }}
                  />
                  {row.title.split(" ", 5).join(" ")}
              </TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">${(row.price).toFixed(2)}</TableCell>
              <TableCell align="right">
                ${(row.price * row.quantity).toFixed(2)}
              </TableCell>
              <TableCell align="center">
                <ButtonGroup size="small" aria-label="Small button group">
                  <IconButton
                    aria-label="cart-rest"
                    size="small"
                    onClick={() => restToQty(row)}
                    disabled={row.quantity == 1}
                  >
                    <RemoveIcon
                      color={row.quantity == 1 ? "default" : "secondary"}
                    />
                  </IconButton>
                  <IconButton
                    aria-label="cart-add"
                    size="small"
                    onClick={() => addToCart(row)}
                  >
                    <AddIcon color="primary" />
                  </IconButton>
                </ButtonGroup>
              </TableCell>
              <TableCell align="center">
                <IconButton
                  aria-label="cart-remove"
                  onClick={() => removeCart(row.id)}
                >
                  <DeleteForeverIcon color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2} sx={{ fontSize: 18, fontWeight: 600 }}>
              Total
            </TableCell>
            <TableCell align="right" sx={{ fontSize: 18, fontWeight: 600 }}>
              ${state.length>0 && totalPrice(state).toFixed(2)}
            </TableCell>
          </TableRow>       
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CartModalContent;
