import { registerComponents } from './components';
import * as totalExtractForm from './forms/total-extract';
import * as gravityPerSourceForm from './forms/gravity-per-source';
import * as ingredientGravityForm from './forms/ingredient-gravity';
import * as poundsPerIngredientForm from './forms/pounds-per-ingredient';

// Register custom Vue components
registerComponents();

// Render the page
totalExtractForm.create();
gravityPerSourceForm.create();
ingredientGravityForm.create();
poundsPerIngredientForm.create();
