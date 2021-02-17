import classes from './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

function NavigationItems() {
  return <ul className={classes.NavigationItems}>
    <NavigationItem
      active
      link={'/'}>Burger Builder</NavigationItem>
    <NavigationItem
      link={'/'}>Checkout</NavigationItem>
  </ul>;
}

export default NavigationItems;
