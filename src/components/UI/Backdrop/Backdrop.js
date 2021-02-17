import classes from './Backdrop.css';

function Backdrop({show, clicked}) {
  return show ? <div className={classes.Backdrop} onClick={clicked} /> : null;
}

export default Backdrop;
