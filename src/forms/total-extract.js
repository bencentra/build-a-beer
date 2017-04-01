import brew from 'brew-eq';
import { Form } from '../components';

const finalGravityInput = {
  id: 'final-gravity',
  label: 'Final Gravity',
  placeholder: 'e.g. 1.052',
  value: ''
};

const finalVolumeInput = {
  id: 'final-volume',
  label: 'Final Volume',
  placeholder: 'e.g. 5.5 gallons',
  value: ''
};

const totalExtractFormConfig = {
  title: 'Total Extract Per Batch',
  inputs: [finalGravityInput, finalVolumeInput],
  result: {
    name: 'Total Gravity',
    units: 'GU'
  }
};

function calculate() {
  const finalGravity = brew.toGU(Number.parseFloat(finalGravityInput.value)) || 0;
  const finalVolume = Number.parseFloat(finalVolumeInput.value) || 0;
  const totalGravity = Number.parseInt(brew.totalGravity(finalVolume, finalGravity));
  console.log(finalGravity, finalVolume, totalGravity);
  return totalGravity;
}

function create() {
  const totalExtractForm = new Form({
    el: '#total-extract',
    data: {
      config: totalExtractFormConfig
    },
    computed: {
      value: calculate
    }
  });
  return totalExtractForm;
}

export {
  create
};
