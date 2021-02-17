import classes from './SideDrawer.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

function SideDrawer() {

  return <div className={classes.SideDrawer}>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </div>;
}

export default SideDrawer;
