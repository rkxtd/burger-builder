import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

function Logo() {
  return <div className={classes.Logo}>
    <img src={burgerLogo} alt={'My Burger Builder'} />
  </div>;
}

export default Logo;
