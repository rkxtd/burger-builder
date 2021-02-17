import {Fragment} from 'react';

import classes from './SideDrawer.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

function SideDrawer({open, closeHandler}) {
  const attachedClasses = [classes.SideDrawer];
  attachedClasses.push(open ? classes.Open : classes.Close);

  return  <Fragment>
    <Backdrop show={open} clicked={closeHandler} />
    <div className={attachedClasses.join(' ')}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  </Fragment>;
}

export default SideDrawer;
