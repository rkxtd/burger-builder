import { Fragment } from "react";
import classes from './Layout.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

function Layout(props) {
  return <Fragment>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>
      {props.children}
    </main>
  </Fragment>
}

export default Layout;
