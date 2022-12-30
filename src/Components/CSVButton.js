import { 
    Button,
    Typography,
 } from "@mui/material";
import { CHARTCOLORS } from "../Constants/Colors";

function CSVButton({sqlLink}) {
    return (
        <Button variant="contained" size="small">
            <Typography sx={{ fontSize: 10 }} color='#fff'>CSV</Typography>
        </Button>
  );
};

export default CSVButton;