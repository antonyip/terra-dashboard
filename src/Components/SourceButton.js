import { 
    Button,
    Typography,
 } from "@mui/material";

function SourceButton({sqlLink}) {
    return (
        <Button variant="contained">
            <Typography sx={{ fontSize: 14 }} color='#fff'>Source</Typography>
        </Button>
  );
};

export default SourceButton; 