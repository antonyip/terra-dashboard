import { 
    Card,
    CardContent,
    Typography,
 } from "@mui/material";
import { CHARTCOLORS } from "../Constants/Colors";

function SingleDigitDisplay({chartName ,chartValue, chartPreValueText}) {
    return (
      <Card>
        <CardContent>
            <Typography sx={{ fontSize: 24 }} color={CHARTCOLORS.PRIMARYLIGHT} component="div">
            {chartName}
            </Typography>
            <Typography sx={{ fontSize: 24 }} color={CHARTCOLORS.SECONDARY} component="div">
            {chartPreValueText}{chartValue}
            </Typography>
        </CardContent>
      </Card>
  );
};

export default SingleDigitDisplay;