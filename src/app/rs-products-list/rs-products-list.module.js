import { angular } from '../../vendors';
import { RidestoreResourcesModule } from '../rs-resources/rs-resources.module';
import { RidestoreProductsListItemModule } from './rs-products-list-item/rs-products-list-item.module';
import { RidestoreProductsListComponent } from './rs-products-list.component';

export const RidestoreProductsListModule = angular
  .module('app.ridestoreProductsList', [
    RidestoreResourcesModule, RidestoreProductsListItemModule
  ])
  .component('ridestoreProductsList', RidestoreProductsListComponent)
  .name;
