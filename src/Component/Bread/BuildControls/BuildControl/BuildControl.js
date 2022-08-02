import React from "react";
import classes from "../BuildControl/BuildControl.module.css"

const BuildControl = (props) => {
    return ( 
        <div className={classes.BuildControl}>
            <button className={classes.Label}>{props.label}</button>
            <button className={classes.More} onClick={props.added}> ADD</button>
            <button className={classes.Less} onClick={props.delete} disabled={props.disabled} >DELETE </button>
        </div>
     );
}
 
export default BuildControl;