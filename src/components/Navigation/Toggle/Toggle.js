import classes from './Toggle.css';

function Toggle({click}) {
  return <div className={classes.Toggle} onClick={click}>
    Menu
  </div>;
}

export default Toggle;
