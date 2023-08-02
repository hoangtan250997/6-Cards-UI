import DatePicker from "../../components/date/DatePicker";
import CustomizedTables from "../../components/table/Table";

//MUI - layout
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

//MUI - component
import Button from "@mui/material/Button";

//MUI - icons
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SendIcon from "@mui/icons-material/Send";

export default function Report() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={2}>
          <DatePicker />
        </Grid>
        <Grid xs={2}>
          <DatePicker />
        </Grid>
        <Grid xs={3}>
          <Button variant="contained" endIcon={<SendIcon />}>
            List
          </Button>{" "}
          <Button variant="contained" endIcon={<FileDownloadIcon />}>
            Excel Export
          </Button>{" "}
        </Grid>
        <Grid xs={12}>
          <CustomizedTables />
        </Grid>
      </Grid>
    </Box>
  );
}
