import brew from 'brew-eq';
import { Form } from '../components';

const ingredientGravityInput = {
  id: 'ingredient-gravity',
  label: 'Gravity Per Source (GU)',
  placeholder: 'e.g. 157 GU',
  value: ''
};

const gravityPerPoundInput = {
  id: 'gravity-per-pound',
  label: 'Gravity Per Pound (GU/lb)',
  placeholder: 'e.g. 25 GU/lb',
  value: ''
};

const poundsPerIngredientConfig = {
  title: 'Pounds Per Ingredient',
  inputs: [ingredientGravityInput, gravityPerPoundInput],
  result: {
    name: 'Pounds',
    units: 'lb'
  }
};

function calculate() {
  const ingredientGravity = Number.parseInt(ingredientGravityInput.value) || 0;
  const gravityPerPound = Number.parseInt(gravityPerPoundInput.value) || 0;
  let poundsPerIngredient = Number.parseFloat(brew.poundsPerIngredient(ingredientGravity, gravityPerPound));
  if (Number.isNaN(poundsPerIngredient) || !Number.isFinite(poundsPerIngredient)) {
    poundsPerIngredient = 0;
  }
  return poundsPerIngredient;
}

function create() {
  const poundsPerIngredientForm = new Form({
    el: '#pounds-per-ingredient',
    data: {
      config: poundsPerIngredientConfig
    },
    computed: {
      value: calculate
    }
  });
  return poundsPerIngredientForm;
}

export {
  create
};
