import { makeStyles } from "@material-ui/core";
import React from "react";
import NavBar from "../NavBarComponents/NavBar";

const layoutStyle = makeStyles({
  page: {
    background: "theme.palette.primary.light",
    width: "100%",
  },
});

const drawerStyle = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },

  toolbar: theme.mixins.toolbar,
}));

function Layout({ children }) {
  const classes = layoutStyle();
  const classes2 = drawerStyle();

  return (
    <div style={{ display: "flex" }}>
      <NavBar />
      <main className={classes2.content}>
        <div className={classes2.toolbar} />
        <div className={classes.page}>{children}</div>
      </main>
    </div>
  );
}

export default Layout;
