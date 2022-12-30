import { Info } from "@mui/icons-material";
import {
  IconButton,
  Tooltip,
} from "@mui/material";

function SRCButton({ srcLink }) {
  return (
    <Tooltip title={srcLink || "undefined"}>
      <IconButton
        color="secondary"
        aria-label="add an alarm"
        onClick={() => {
          if (srcLink) {
            window.open(srcLink, "_blank");
          }
        }}
      >
        <Info sx={{ color: "#999" }}></Info>
      </IconButton>
    </Tooltip>
  );
}

export default SRCButton;
