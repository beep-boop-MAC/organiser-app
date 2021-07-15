import { makeStyles } from "@material-ui/core";
import React from "react";
import NavBar from "../NavBarComponents/NavBar";


const layoutStyle = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },

  toolbar: theme.mixins.toolbar,

  page: {
    background: "light gray",
    width: "100%",
  },
}));

function Layout({ children }) {
  const classes = layoutStyle();

  return (
    <div style={{ display: "flex" }}>
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.page}>{children}</div>
      </main>
    </div>
  );
}

export default Layout;
