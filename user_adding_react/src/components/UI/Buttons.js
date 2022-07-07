import React from "react";
import classes from './Buttons.module.css';

const Buttons = props => {

    return (
        <button className={classes.button} type={props.type || 'button'}
        onClick={props.onClick}>
            {props.children}
             </button>
    )
}

export default Buttons;

