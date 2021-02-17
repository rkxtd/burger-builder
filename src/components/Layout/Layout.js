import {Fragment, useState} from "react";
import classes from './Layout.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

function Layout(props) {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(true);
  const closeSideDrawerHandler = () => {
    setSideDrawerOpen(false);
  };
  return <Fragment>
    <Toolbar />
    <SideDrawer open={sideDrawerOpen} closeHandler={closeSideDrawerHandler}/>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Fragment>
}

export default Layout;
