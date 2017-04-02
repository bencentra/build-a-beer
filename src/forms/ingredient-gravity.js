import brew from 'brew-eq';
import { Form } from '../components';

const extractPotentialInput = {
  id: 'extract-potential',
  label: 'Extract Potential',
  placeholder: 'e.g. 1.038',
  value: ''
};

const mashEfficiencyInput = {
  id: 'mash-efficiency',
  label: 'Mash Efficiency (%)',
  placeholder: 'e.g. 68%',
  value: '68'
};

const ingredientGravityConfig = {
  title: 'Gravity Per Pound',
  inputs: [extractPotentialInput, mashEfficiencyInput],
  result: {
    name: 'Gravity/lb',
    units: 'GU/lb'
  }
};

function calculate() {
  const extractPotential = brew.toGU(Number.parseFloat(extractPotentialInput.value)) || 0;
  const mashEfficiency = brew.toDecimal(Number.parseInt(mashEfficiencyInput.value)) || 0;
  const totalGravity = Number.parseInt(brew.gravityPerPound(extractPotential, mashEfficiency));
  return totalGravity;
}

function create() {
  const ingredientGravityForm = new Form({
    el: '#ingredient-gravity',
    data: {
      config: ingredientGravityConfig
    },
    computed: {
      value: calculate
    }
  });
  return ingredientGravityForm;
};

export {
  create
};
