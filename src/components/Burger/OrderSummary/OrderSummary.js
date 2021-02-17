import {Fragment} from 'react';
import capitalize from 'capitalize';
import Button from "../../UI/Button/Button";

function OrderSummary({ingredients, purchaseCancelled, price, purchaseContinued}) {
  const ingredientSummary = Object.keys(ingredients)
    .filter(ingredient => ingredients[ingredient] > 0)
    .map(ingredient => ({
      label: ingredient,
      count: ingredients[ingredient]
    }))
    .map(({label, count}, id) => <li key={id}>
      <span style={{textTransform: 'capitalize'}}>{label}</span>: <strong>{count}</strong></li>);

  return <Fragment>
    <h3>Your Order</h3>
    <p>A delicious burger with following ingredients:</p>
    <ul>
      {ingredientSummary}
    </ul>
    <p><strong>Total Price: ${price.toFixed(2)}</strong></p>
    <p>Continue to Checkout?</p>
    <Button type={'Cancel'} clicked={purchaseCancelled}>CANCEL</Button>
    <Button type={'Success'} clicked={purchaseContinued}>CONTINUE</Button>
  </Fragment>
}

export default OrderSummary;
