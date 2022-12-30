import { 
    Button,
    Typography,
 } from "@mui/material"

function sendJSONFile(jsonData, jsonFilename) {
    const fileData = JSON.stringify(jsonData)
    const blob = new Blob([fileData], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.download = jsonFilename || "download.json"
    link.href = url
    link.click()
  }

function JSONButton({jsonData, jsonFilename}) {
    return (
        <Button variant="contained" size="small" onClick={() => {sendJSONFile(jsonData, jsonFilename)}}>
            <Typography sx={{ fontSize: 10 }} color='#fff'>JSON</Typography>
        </Button>
  );
};

export default JSONButton;