import template from './rs-products-list.html';

export const RidestoreProductsListComponent = {
  template,
  bindings: {
    categoryId: '='
  },
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
    * @param {angular.IWindowService} $window
    * @param {RidestoreCategoryService} RidestoreCategoryService
    */
    constructor($window, RidestoreCategoryService) {
      'ngInject';
      this.categoryService = RidestoreCategoryService;
      this.window = $window;
    }
    $onInit() {
      this.categoryService.getCategory(this.categoryId)
        .then((response) => {
          /** fill object properties from response */
          Object.assign(this, response);

          /** change the page title and description */
          this.window.document.title = response.category_info.meta_title;
          const metaDescElement = this.window.document
            .querySelector('meta[name="description"]');
          if (metaDescElement) {
            metaDescElement.setAttribute('content',
              response.category_info.meta_description);
          }
        });
    }
  }
};
