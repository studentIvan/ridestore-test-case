import { angular } from '../vendors';
import { AppComponent } from './app.component';
import { RidestoreProductsListModule } from './rs-products-list/rs-products-list.module';
import './app.scss';

/**
 * General application module
 */
export const AppModule = angular
  .module('app', [RidestoreProductsListModule])
  .component('app', AppComponent)
  .name;
