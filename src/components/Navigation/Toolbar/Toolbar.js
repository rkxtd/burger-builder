import classes from './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Toggle from "../Toggle/Toggle";

function Toolbar({openSideDrawer}) {
  return <header className={classes.Toolbar}>
    <Toggle click={openSideDrawer} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>;
}

export default Toolbar;
