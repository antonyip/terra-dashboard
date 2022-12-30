import { 
    Button,
    Typography,
 } from "@mui/material";
import { CHARTCOLORS } from "../Constants/Colors";

function SourceButton({sqlLink}) {
    return (
        <Button variant="contained">
            <Typography sx={{ fontSize: 14 }} color='#fff'>Source</Typography>
        </Button>
  );
};

export default SourceButton;