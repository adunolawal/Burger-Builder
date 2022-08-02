import React,{ Component } from "react";
import Bread from "../../Component/Bread/Bread";
import BuildControls from "../../Component/Bread/BuildControls/BuildControls";
import Aux from "../../hoc/Auxilliary";

const INGREDIENT_PRICES = {
    salad : 50,
    cheese : 100,
    bacon : 70,
    meat : 10
}

class Burger extends Component {

    state = {
        ingredients : {
            salad : 0,
            cheese : 0,
            bacon : 0,
            meat : 0
        }, totalPrice : 500, purchaseable : false
    }

    updatePurchaseState () {
        const ingredients = {...this.state.ingredients}
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce ((sum, el) => {
            return sum + el
        }, 0)
        this.setState({
            purchaseable : sum > 0
        })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        if(updatedCount <= 2 ){
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({
            totalPrice: newPrice,
            ingredients : updatedIngredients
        })}
    }
    deleteIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount - 1
        if(updatedCount>=0){
        const updatedIngredients = {
             ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeletion = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeletion
        this.setState({
            totalPrice: newPrice,
            ingredients : updatedIngredients
        })
       }
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Aux> 
                <Bread ingredients={this.state.ingredients}></Bread>
                <BuildControls
                ingredientAdded={this.addIngredientHandler}
                ingredientDeleted={this.deleteIngredientHandler} 
                updatePurchase ={this.state.purchaseable} 
                disabled={disabledInfo}
                price={this.state.totalPrice} >
                </BuildControls>
            </Aux>
        )
    }
} 

export default Burger;