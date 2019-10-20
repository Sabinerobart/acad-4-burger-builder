import React, { Component } from "react";

import Aux from "../../hoc/Aux";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}; // global constants in capital letters

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    price: 4
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }; // create new state because state should always be immutable

    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.price;
    const newPrice = oldPrice + priceAddition;
    this.setState({ price: newPrice, ingredients: updatedIngredients });
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];

    // Avoid error when trying to remove an ingredient that doesn't exist. Works but useless now that the button is disabled
    // if (oldCount <= 0) {
    //   return; // if condition is met, stops here.
    // }

    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }; // create new state because state should always be immutable

    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.price;
    const newPrice = oldPrice + priceDeduction;
    this.setState({ price: newPrice, ingredients: updatedIngredients });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }; // copied the ingredients state in an immutable way

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    } // for each key in the previous state, returns true if left = right

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.price}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
