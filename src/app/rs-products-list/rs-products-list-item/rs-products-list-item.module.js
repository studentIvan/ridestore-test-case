import { angular } from '../../../vendors';
import { RidestoreProductsListItemComponent } from './rs-products-list-item.component';

export const RidestoreProductsListItemModule = angular
  .module('app.ridestoreProductsListItem', [])
  .component('ridestoreProductsListItem', RidestoreProductsListItemComponent)
  .name;
