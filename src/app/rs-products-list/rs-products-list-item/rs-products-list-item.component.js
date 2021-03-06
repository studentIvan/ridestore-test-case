import template from './rs-products-list-item.html';
import './rs-products-list-item.scss';

export const RidestoreProductsListItemComponent = {
  template,
  bindings: {
    product: '<'
  },
  /**
   * Binding incoming product input data object
   * to current controller object properties
   */
  controller: class RidestoreProductsListItemComponent {
    $onInit() {
      Object.assign(this, this.product);
    }
  }
};
