import Vue from 'vue';

const registerComponents = () => {
  Vue.component('eq-form-group', {
    props: ['input'],
    template:
`
<div class="form-group row">
  <label v-bind:for="input.id" class="col-3 col-form-label">{{ input.label }}</label>
  <div class="col-9">
    <input class="form-control" type="text" v-bind:placeholder="input.placeholder" v-model="input.value" v-bind:id="input.id">
  </div>
</div>
`
  });

  Vue.component('eq-form', {
    props: ['config', 'value'],
    template:
`
<div class="card">
  <div class="card-header">{{ config.title }}</div>
  <div class="card-block">
    <eq-form-group v-for="input in config.inputs" v-bind:input="input"></eq-form-group>
    <div class="row">
      <div class="col-3">{{ config.result.name }}</div>
      <div class="col-9"><span id="total-gravity">{{ value }}</span> {{config.result.units}}</div>
    </div>
  </div>
</div>
`
  });
};

const Form = Vue.extend({});

export {
  registerComponents,
  Form
};
