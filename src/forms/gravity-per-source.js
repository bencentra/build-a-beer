import brew from 'brew-eq';
import { Form } from '../components';

const totalGravityInput = {
  id: 'total-gravity',
  label: 'Total Gravity (GU)',
  placeholder: 'e.g. 286 GU',
  value: ''
};

const percentOfGristInput = {
  id: 'percent-of-grist',
  label: '% of Grist',
  placeholder: 'e.g. 55%',
  value: ''
};

const gravityPerSourceConfig = {
  title: 'Gravity Per Ingredient',
  inputs: [totalGravityInput, percentOfGristInput],
  result: {
    name: 'Gravity',
    units: 'GU'
  }
}

function calculate() {
  const totalGravity = Number.parseInt(totalGravityInput.value) || 0;
  const percentOfGrist = Number.parseFloat(percentOfGristInput.value / 100) || 0;
  const gravityPerSource = Number.parseInt(brew.gravityPerSource(percentOfGrist, totalGravity));
  return gravityPerSource;
}

function create() {
  const gravityPerSourceForm = new Form({
    el: '#gravity-per-source',
    data: {
      config: gravityPerSourceConfig
    },
    computed: {
      value: calculate
    }
  });
  return gravityPerSourceForm;
}

export {
  create
};
