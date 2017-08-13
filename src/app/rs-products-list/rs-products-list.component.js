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
    * @param {angular.IWindowService} $window
    * @param {RidestoreCategoryService} RidestoreCategoryService
    */
    constructor($log, $attrs, $window, RidestoreCategoryService) {
      'ngInject';
      this.categoryService = RidestoreCategoryService;
      this.log = $log;
      this.attrs = $attrs;
      this.window = $window;
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
        .then((response) => {
          /** fill object properties from response */
          Object.assign(this, response);

          /** change the page title and description */
          this.window.document.title = response.category_info.meta_title;
          this.window.document.querySelector('meta[name="description"]')
            .setAttribute('content', response.category_info.meta_description);
        });
    }
  }
};
