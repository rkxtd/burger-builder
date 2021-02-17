import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
import { BreadTypes } from './IngredientTypes';
import PropTypes from 'prop-types';

function Burger({ ingredients }) {

  const transformedIngredients = Object.keys(ingredients)
    .map(igKey => {
      return [...Array(ingredients[igKey])]
        .map((_, i) => {
          return <BurgerIngredient type={igKey} key={igKey + i} />
        })
    })
    .flat();

  return <div className={classes.Burger}>
    <BurgerIngredient type={BreadTypes.BreadTop} />
    {transformedIngredients.length ? transformedIngredients : <p>Add Ingredients</p>}
    <BurgerIngredient type={BreadTypes.BreadBottom} />
  </div>;
}

Burger.propTypes = {
  ingredients: PropTypes.object,
};

export default Burger;
