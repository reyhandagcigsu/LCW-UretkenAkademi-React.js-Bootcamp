import React from "react";
import ReactDOM from "react-dom";
import Buttons from "./Buttons";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
  {
    /* error çıktığında backdrop da gitsin diye onconfirm i AddUserdan gelen erroru devre dışı bırakan funci buraya da ekledik. */
  }
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2> {props.title} </h2>
      </header>
      <div className={classes.content}>
        <p> {props.message} </p>
      </div>
      <footer className={classes.actions}>
        <Buttons onClick={props.onConfirm}> Okay</Buttons>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
