import { Fragment } from "react";
import classes from './Layout.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";

function Layout(props) {
  return <Fragment>
    <Toolbar />
    <main className={classes.Content}>
      {props.children}
      HI
    </main>
  </Fragment>
}

export default Layout;
