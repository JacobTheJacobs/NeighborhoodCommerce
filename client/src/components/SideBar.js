import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MailIcon from "@material-ui/icons/Mail";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: "auto",
  },
  link: {
    fontSize: "2em",
    textDecoration: "none",
    color: "#1769aa",
  },
});

const SideBar = (props) => {
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav" className={classes.list}>
        <ListItem button onClose={() => props.onClose(false)}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </ListItem>
        <ListItem button onClose={() => props.onClose(false)}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <Link to="/details" className={classes.link}>
            Details
          </Link>
        </ListItem>
        <ListItem button onClose={() => props.onClose(false)}>
          HIGHLIGHTS
        </ListItem>
        <ListItem button onClose={() => props.onClose(false)}>
          SUPPORT
        </ListItem>
        <ListItem button onClose={() => props.onClose(false)}>
          LOCATION
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;
