import { 
    Button,
    Typography,
 } from "@mui/material";

function CSVButton({sqlLink}) {
    return (
        <Button variant="contained" size="small">
            <Typography sx={{ fontSize: 10 }} color='#fff'>CSV</Typography>
        </Button>
  );
};

export default CSVButton;