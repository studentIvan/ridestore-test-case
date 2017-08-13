import template from './rs-products-list.html';

export const RidestoreProductsListComponent = {
  template,
  controller: class RidestoreProductsListComponent {
    /**
     * @typedef {{
        id: number, brand: string, department: string, productype: string,
        shortname: string, color: string, image: string, type_id: string,
        image_padding: string, url_key: string, price: number, sale_price: number
      }} RidestoreProduct
     * @typedef {{
        category_info: { name: string, meta_title: string, meta_description: string },
        error: boolean, status: number,
        products: RidestoreProduct[]
      }} RidestoreCategory
    * @typedef {{
        getCategory: (categoryId: number) => angular.IPromise<RidestoreCategory>
      }} RidestoreCategoryService
    *
    * @param {angular.ILogService} $log
    * @param {angular.IAttributes} $attrs
    * @param {RidestoreCategoryService} RidestoreCategoryService
    */
    constructor($log, $attrs, RidestoreCategoryService) {
      'ngInject';
      this.categoryService = RidestoreCategoryService;
      this.log = $log;
      this.attrs = $attrs;
    }
    $onInit() {
      /**
       * @type {number}
       */
      this.categoryId = this.attrs.categoryId;
      /**
       * @type {RidestoreProduct[]}
       */
      this.products = [];

      this.categoryService.getCategory(this.categoryId)
        .then((response) => Object.assign(this, response));
    }
  }
};
