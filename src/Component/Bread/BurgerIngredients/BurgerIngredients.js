import { Component } from "react";
import PropTypes from "prop-types";
import classes from "../BurgerIngredients/BurgerIngredients.module.css"

class BurgerIngredients extends Component {

    render() { 
        let ingredients = null;
        switch(this.props.type){
            case('bread-bottom'):
                ingredients = <div className={classes.Breadbottom}> </div>
                break;
            case('bread-top'):
                ingredients = (
                    <div  className={classes.Breadtop}> 
                    <div className={classes.Seed1}></div>
                    <div className={classes.Seed2}></div>
                    </div> )
                break;
            case('meat'):
                ingredients =( <div className={classes.Meat}>  </div>)
                break;
            case('bacon'):
                ingredients =( <div className={classes.Bacon}>  </div>)
                break;
            case('cheese'):
                ingredients =( <div className={classes.Cheese}>  </div>)
                break;
            case('salad'):
                ingredients =( <div className={classes.Salad}>  </div>)
                break;
            default:
                ingredients = null
                break;
        }
        return ingredients;
    }
}
BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
}
 
export default BurgerIngredients;