import Vue from 'vue';
import brew from 'brew-eq';

// ==============================
// Calculating the mash bill
// ==============================

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
  title: "Total Extract Per Batch",
  prefix: 'te',
  inputs: [finalGravityInput, finalVolumeInput],
  result: {
    name: 'Total Gravity',
    units: 'GU'
  }
};

Vue.component('form-group', {
  props: ['input'],
  template:
`
<div class="form-group row">
  <label v-bind:for="input.id" class="col-2 col-form-label">{{ input.label }}</label>
  <div class="col-10">
    <input class="form-control" type="text" v-bind:placeholder="input.placeholder" v-model="input.value" v-bind:id="input.id">
  </div>
</div>
`
});

Vue.component('card', {
  props: ['form', 'value'],
  template:
`
<div class="card">
  <div class="card-header">{{ form.title }}</div>
  <div class="card-block">
    <form-group v-for="input in form.inputs" v-bind:input="input"></form-group>
    <div class="row">
      <div class="col-2">{{ form.result.name }}</div>
      <div class="col-10"><span id="total-gravity">{{ value }}</span> {{form.result.units}}</div>
    </div>
  </div>
</div>
`
});

const Form = Vue.extend({});

const totalExtractForm = new Form({
  el: '#total-extract',
  data: {
    config: totalExtractFormConfig
  },
  computed: {
    value: function() {
      const finalGravity = brew.toGU(Number.parseFloat(finalGravityInput.value)) || 0;
      const finalVolume = Number.parseFloat(finalVolumeInput.value) || 0;
      const totalGravity = Number.parseInt(brew.totalGravity(finalVolume, finalGravity));
      console.log(finalGravity, finalVolume, totalGravity);
      return totalGravity;
    }
  }
});
