import { 
    Button,
    Typography,
 } from "@mui/material";

function openLink()
{
    console.log("TODO");
}

function SRCButton({sqlLink}) {
    return (
        <Button variant="contained" size="small" onClick={() => {openLink(sqlLink)}}>
            <Typography sx={{ fontSize: 10 }} color='#fff'>SQL</Typography>
        </Button>
  );
};

export default SRCButton;