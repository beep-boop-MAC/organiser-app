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

  border:{
    borderColor: theme.palette.primary.main,
    borderRadius: "10px",
    padding: "20px",
    borderBlockEndWidth: "3px",
    borderBlockStartWidth: "3px",
    borderInlineEndWidth: "3px",
    borderInlineStartWidth: "3px",
    height: "20%",
    width: "70%",
    marginTop: "10%",

  }
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
        <div  align="center">
          <Box border={1}
          className={classes.border}
          >
            <img src={logo} alt="logo" style={{width: "120%", transform: 'translate(-9%, -25%)'}}/>
          </Box>
        </div>
        <div className={classes.toolbar} />
        <List style={{ marginTop: "-100px" }}>
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
