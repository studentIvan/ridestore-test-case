import { angular } from '../vendors';
import { AppComponent } from './app.component';
import './app.scss';

/**
 * General application module
 */
export const AppModule = angular
  .module('app', [])
  .component('app', AppComponent)
  .name;
