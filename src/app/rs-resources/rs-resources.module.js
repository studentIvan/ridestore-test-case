import { angular, ngResource } from '../../vendors';
import { RidestoreCategoryService } from './rs-category.service';

export const RidestoreResourcesModule = angular
  .module('app.ridestore-resources', [ngResource])
  .service('RidestoreCategoryService', RidestoreCategoryService)
  .config(($sceDelegateProvider) => {
    'ngInject';
    $sceDelegateProvider.resourceUrlWhitelist([
      /** Allow same origin resource loads. */
      'self',
      /**
       * Allow loading from our assets domain.
       * Notice the difference between * and **.
       */
      'https://*.ridestore.com/**'
    ]);
  })
  .name;
