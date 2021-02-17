import classes from './BurgerIngredient.css';
import { BreadTypes, IngredientTypes } from '../IngredientTypes';
import PropTypes from 'prop-types';
import capitalize from 'capitalize';

function BurgerIngredient(props) {
  let ingredient = null;
  switch (props.type) {
    case (BreadTypes.BreadTop):
      ingredient = <div className={classes.BreadTop}>
        <div className={classes.Seeds1} />
        <div className={classes.Seeds2} />
      </div>
      break;
    default:
      ingredient = <div className={classes[props.type.split('-').map(capitalize).join('')]} />
      break;
  }
  return ingredient;
}

BurgerIngredient.propTypes = {
  type: PropTypes.oneOf([...Object.values(IngredientTypes), ...Object.values(BreadTypes)]).isRequired,
};

export default BurgerIngredient;
