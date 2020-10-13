import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "linear-gradient(45deg, #FFFFFF 30%, #FF8E53 90%)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const [drawerOpen, SetDrawerToOpen] = useState(false);
  const [headerShow, SetHeaderToShow] = useState(false);
  const classes = useStyles();

  const toggle = (value) => {
    SetDrawerToOpen(value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => toggle(true)}
            style={{
              paddingRight: "32px",
              marginRight: "80px",
            }}
          >
            <MenuIcon />
          </IconButton>
          <SideBar open={drawerOpen} onClose={(value) => toggle(value)} />
          <Typography variant="h4" className={classes.title}>
            <div>בקטנה</div>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
