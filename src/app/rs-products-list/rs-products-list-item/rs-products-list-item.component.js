import template from './rs-products-list-item.html';
import './rs-products-list-item.scss';

export const RidestoreProductsListItemComponent = {
  template,
  bindings: {
    product: '<'
  },
  controller: class RidestoreProductsListItemComponent {
    $onInit() {
      Object.assign(this, this.product);
    }
  }
};
