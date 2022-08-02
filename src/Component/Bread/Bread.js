import React from "react"
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients"
import classes from "../Bread/Bread.module.css"

const Bread = (props) => {

    let newIngredients = Object.keys(props.ingredients).map((igkey) => {
            return [...Array (props.ingredients[igkey] )].map((_, i) =>
            {return <BurgerIngredients key={igkey + i} type={igkey} />})
        }
    )
    .reduce((arr, elem) => {
        return arr.concat(elem)
    },[])
    if(newIngredients.length === 0){
        newIngredients = <h2>Add Ingredients</h2>
    }

    return(
        <div className={classes.Bread}>
           <BurgerIngredients type = 'bread-top'></BurgerIngredients>
           {newIngredients}
           <BurgerIngredients type = 'bread-bottom'/>
        </div>
    )
}

export default Bread;