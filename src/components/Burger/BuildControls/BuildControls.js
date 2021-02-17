import classes from './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";
import { IngredientTypes } from '../IngredientTypes';
import capitalize from 'capitalize';

const controls = Object.values(IngredientTypes)
  .map(type => ({type, label: capitalize(type).replace('-', ' ')}));

function BuildControls({ingredients, disabledTypes, purchasable, ordered, ingredientAdded, ingredientRemoved, price}) {
  return <div className={classes.BuildControls}>
    <p>Current Price: <strong>${price.toFixed(2)}</strong></p>
    {controls.map(({label, type}, id) => <BuildControl
      label={label}
      key={type + id}
      count={ingredients[type]}
      added={() => ingredientAdded(type)}
      removed={() => ingredientRemoved(type)}
      disabled={disabledTypes[type]}
    />)}
    <button className={classes.OrderButton} disabled={!purchasable} onClick={ordered}>Order NOW</button>
  </div>
}

export default BuildControls;
