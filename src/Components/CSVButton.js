import { 
    Button,
    Typography,
 } from "@mui/material"

function sendCSVFile(csvData, csvFilename) {
    //const fileData = JSON.stringify(csvData)
    const blob = new Blob([csvData], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.download = csvFilename || "download.csv"
    link.href = url
    link.click()
  }

function CSVButton({csvData, csvFilename}) {
    return (
        <Button variant="contained" size="small" onClick={() => {sendCSVFile(csvData, csvFilename)}}>
            <Typography sx={{ fontSize: 10 }} color='#fff'>CSV</Typography>
        </Button>
  );
};

export default CSVButton;