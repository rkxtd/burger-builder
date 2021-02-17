import classes from './BuildControl.css';

function BuildControl(props) {
  return <div className={classes.BuildControl}>
    <div  className={classes.Label}>{props.label}</div>
    <div  className={classes.Count}>{props.count}</div>
    <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
    <button className={classes.More} onClick={props.added}>More</button>
  </div>
}

export default BuildControl;
