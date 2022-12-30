import { useState } from "react";
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

function SQLButton({ sqlQuery }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" size="small" onClick={handleClickOpen}>
        <Typography sx={{ fontSize: 10 }} color="#fff">
          SQL
        </Typography>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        maxWidth={"md"}
      >
        <DialogTitle id="sql-title" color={"#ccc"}>
          {"SQL Query"}
        </DialogTitle>
        <DialogContent>
            <Typography color="#ccc"  style={{whiteSpace: 'break-spaces', }}>
                {sqlQuery}
            </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SQLButton;
