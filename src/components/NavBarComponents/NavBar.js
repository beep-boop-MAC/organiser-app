import React from "react";
import { Drawer, AppBar, Toolbar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { NavBarItems } from "./NavBarItems";
import logo from "./logo.png";
import { useHistory } from "react-router-dom";

const drawerWidth = "230px";

export const styles = makeStyles((theme) => ({
  page: {
    backgroundColor: "EBF2FA",
    width: "100%",
  },

  drawer: {
    width: drawerWidth,
  },

  paper: {
    width: drawerWidth,
    backgroundColor: "EBF2FA",
  },

  root: {
    display: "flex",
  },

  icons: {
    flex: "30%",
    display: "grid",
    placeItems: "center",
  },

  titles: {
    flex: "70%",
    fontFamily: "Noto Sans, sans-serif",
  },

  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: "1",
    backgroundColor: "theme.palette.background.default",
    padding: "theme.spacing(3)",
  },

}));

function NavBar() {
  const classes = styles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar colour="secondary"></Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.paper }}
      >
        <div align="center">
          <img
            src={logo}
            alt="logo"
            style={{ width: "80%",  transform: "translate(0%, 15%)"}}
          />
        </div>
        <div className={classes.toolbar} />
        <List style={{ marginTop: "-70px" }}>
          {NavBarItems.map((val, key) => (
            <ListItem button key={key} onClick={() => history.push(val.path)}>
              <ListItemIcon className={classes.icons}>{val.icon}</ListItemIcon>
              <ListItemText className={classes.titles} primary={val.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default NavBar;
