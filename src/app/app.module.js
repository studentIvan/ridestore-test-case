import { angular, uiRouter } from '../vendors';
import { AppComponent } from './app.component';
import { RidestoreProductsListModule } from './rs-products-list/rs-products-list.module';
import './app.scss';

/**
 * General application module
 */
export const AppModule = angular
  .module('app', [uiRouter, RidestoreProductsListModule])
  .component('app', AppComponent)
  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    'ngInject';
    $stateProvider
      .state('category', {
        url: '/category/:categoryId',
        component: 'app'
      });
    $urlRouterProvider.otherwise('/category/208');
    $locationProvider.html5Mode(true);
  })
  .name;
