import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css"

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'}
]

const BuildControls = (props) => {
    return ( 
        <div className={classes.Buildcontrols}>
            <h1>Price : {props.price}</h1>
            {controls.map (ctrl => {
                return <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                disabled = {props.disabled[ctrl.type]}
                added = {() => props.ingredientAdded(ctrl.type)} 
                delete = {() => props.ingredientDeleted(ctrl.type)} >
                </BuildControl>
            })}
            <button className={classes.OrderBtn} disabled={!props.updatePurchase}>PLACE YOUR ORDER</button>
        </div>
     );
}
 
export default BuildControls;