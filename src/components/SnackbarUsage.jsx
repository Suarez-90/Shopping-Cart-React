import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function SnackbarUsage({handleCloseSnack, open}) {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseSnack}>      
      <Alert
        onClose={handleCloseSnack}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        <AlertTitle>Success</AlertTitle>
        The purchase was completed <strong>successfully!</strong>
      </Alert>
    </Snackbar>
  );
}

export default SnackbarUsage;
