import { 
    Button,
    Typography,
 } from "@mui/material";
import { CHARTCOLORS } from "../Constants/Colors";

function SQLButton({sqlLink}) {
    return (
        <Button variant="contained" size="small">
            <Typography sx={{ fontSize: 10 }} color='#fff'>SQL</Typography>
        </Button>
  );
};

export default SQLButton;