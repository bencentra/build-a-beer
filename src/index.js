import { registerComponents } from './components';
import * as totalExtractForm from './forms/total-extract';
import * as gravityPerSourceForm from './forms/gravity-per-source';

// Register custom Vue components
registerComponents();

// Render the page
totalExtractForm.create();
gravityPerSourceForm.create();
