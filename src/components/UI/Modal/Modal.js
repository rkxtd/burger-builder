import classes from './Modal.css';
import Backdrop from "../Backdrop/Backdrop";
import { Fragment } from 'react';

function Modal({show, children, close }) {
  return <Fragment>
    <div
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}>
      {children}
    </div>
    <Backdrop show={show} clicked={close} />
  </Fragment>
}

export default Modal;
