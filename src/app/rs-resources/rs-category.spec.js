import angular from 'angular';
import ngResource from 'angular-resource';
import 'angular-mocks';
import rsCategoryMock from './rs-category.mock';
import { RidestoreCategoryService } from './rs-category.service';

describe('RidestoreCategoryService', () => {
  beforeEach(() => {
    angular
      .module('app.ridestore-resources', [ngResource])
      .service('RidestoreCategoryService', RidestoreCategoryService);
    angular.mock.module('app.ridestore-resources');
  });
  it('should return category_info meta_title and meta_description for id 208',
    angular.mock.inject(($httpBackend, RidestoreCategoryService) => {
      $httpBackend.expectJSONP(
        'https://dev.ridestore.com/rest-api/v2/' +
          'categories/208?lang=com&callback=JSON_CALLBACK'
      ).respond(rsCategoryMock);

      RidestoreCategoryService.getCategory(208).then((category) => {
        expect(category.category_info.meta_title).not.toBeNull();
        expect(category.category_info.meta_description).not.toBeNull();
      });
    })
  );
  it('should return products for id 208',
    angular.mock.inject(($httpBackend, RidestoreCategoryService) => {
      $httpBackend.expectJSONP(
        'https://dev.ridestore.com/rest-api/v2/' +
          'categories/208?lang=com&callback=JSON_CALLBACK'
      ).respond(rsCategoryMock);

      RidestoreCategoryService.getCategory(208).then((category) => {
        expect(category.products.length > 0).toBe(true);
      });
    })
  );
});
