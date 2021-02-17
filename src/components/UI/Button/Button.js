import classes from './Button.css';

function Button({type, children, clicked}) {
  return <button className={[classes.Button, classes[type]].join(' ')} onClick={clicked}>{children}</button>;
}

export default Button;
