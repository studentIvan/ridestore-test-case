export class RidestoreCategoryService {
  /**
   * @param {angular.resource.IResourceService} $resource
   */
  constructor($resource) {
    'ngInject';
    this.categoryResource = $resource(
      'https://:url/rest-api/:restVersion/categories/:id',
      {
        url: 'dev.ridestore.com',
        restVersion: 'v2',
        id: '207',
        lang: 'com'
      },
      {
        get: {
          method: 'JSONP'
        }
      }
    );
  }
  /**
   * @param {number} categoryId
   */
  getCategory(categoryId) {
    return this.categoryResource.get({ id: categoryId }).$promise;
  }
}
