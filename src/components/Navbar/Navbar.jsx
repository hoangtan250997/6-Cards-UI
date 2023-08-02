import React from "react";
import { Link } from "react-router-dom";

// MUI
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

// MUI Icons
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PaidIcon from "@mui/icons-material/Paid";

export default function Navbar() {
  const remove = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };

  const username = window.localStorage.getItem("username");

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List>
        <ListItem disablePadding component="div">
          <ListItemButton onClick={remove}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={username} />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Assign" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding component={Link} to="/spending">
          <ListItemButton>
            <ListItemIcon>
              <PaidIcon />
            </ListItemIcon>
            <ListItemText primary="Spending" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding component={Link} to="/report">
          <ListItemButton>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
