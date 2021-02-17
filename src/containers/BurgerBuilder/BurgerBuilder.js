import { Fragment, useState } from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import {IngredientTypes} from "../../components/Burger/IngredientTypes";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  [IngredientTypes.Salad]: 0.4,
  [IngredientTypes.Cheese]: 0.7,
  [IngredientTypes.Bacon]: 0.8,
  [IngredientTypes.Meat]: 1.5,
  [IngredientTypes.Tomato]: 0.5,
};

function BurgerBuilder(props) {
  const [ingredients, setIngredients] = useState({
    tomato: 0,
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  const [totalPrice, setTotalPrice] = useState(6);
  const [purchasing, setPurchasing] = useState(false);

  const addIngredientHandler = (type) => {
    ingredients[type] = ingredients[type] + 1;
    setTotalPrice(totalPrice + INGREDIENT_PRICES[type]);
    setIngredients(ingredients);
  };

  const removeIngredientHandler = (type) => {
    setTotalPrice(ingredients[type] > 0 ? Math.abs(totalPrice - INGREDIENT_PRICES[type]): totalPrice);
    ingredients[type] = ingredients[type] > 0 ? ingredients[type] - 1 : 0;
    setIngredients(ingredients);
  };

  const purchasingHandler = () => {
    setPurchasing(true);
  };

  const purchasingCancelHandler = () => {
    setPurchasing(false);
  };

  const purchasingContinueHandler = () => {
    alert('You Continue');
  };

  const disabledTypes = Object.keys(ingredients).reduce((acc, key) => {
    acc[key] = ingredients[key] === 0;
    return acc;
  }, {});

  const ingredientsCount = Object.keys(ingredients).reduce((acc, key) => acc += ingredients[key], 0);

  return <Fragment>
    <Modal show={purchasing} close={purchasingCancelHandler}>
      <OrderSummary
        ingredients={ingredients}
        purchaseCancelled={purchasingCancelHandler}
        purchaseContinued={purchasingContinueHandler}
        price={totalPrice}
      />
    </Modal>
    <Burger ingredients={ingredients} />
    <BuildControls
      ingredients={ingredients}
      price={totalPrice}
      disabledTypes={disabledTypes}
      purchasable={ingredientsCount > 0}
      ordered={purchasingHandler}
      ingredientAdded={addIngredientHandler}
      ingredientRemoved={removeIngredientHandler} />
  </Fragment>;
}

export default BurgerBuilder;
