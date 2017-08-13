import angular from 'angular';
import 'angular-mocks';
import rsCategoryMock from '../rs-resources/rs-category.mock';
import { RidestoreResourcesModule } from '../rs-resources/rs-resources.module';
import { RidestoreProductsListComponent } from './rs-products-list.component';

describe('RidestoreProductsListComponent', () => {
  beforeEach(() => {
    angular
      .module('app', [RidestoreResourcesModule])
      .component('ridestoreProductsList', RidestoreProductsListComponent);
    angular.mock.module('app');
  });

  it('should render product',
    angular.mock.inject(($httpBackend, $window, $rootScope, $compile) => {
      $httpBackend.expectJSONP(
        'https://dev.ridestore.com/rest-api/v2/' +
          'categories/208?lang=com&callback=JSON_CALLBACK'
      ).respond(rsCategoryMock);

      const element = $compile(
        `<ridestore-products-list category-id="208"></ridestore-products-list>`
      )($rootScope);

      $rootScope.$digest();
      $httpBackend.flush();
      expect(element.find('ridestore-products-list-item').length).toBe(1);
    })
  );

  it('should change title',
    angular.mock.inject(($httpBackend, $window, $rootScope, $compile) => {
      $httpBackend.expectJSONP(
        'https://dev.ridestore.com/rest-api/v2/' +
          'categories/208?lang=com&callback=JSON_CALLBACK'
      ).respond(rsCategoryMock);

      $compile(
        `<ridestore-products-list category-id="208"></ridestore-products-list>`
      )($rootScope);

      $rootScope.$digest();
      $httpBackend.flush();
      expect($window.document.title).toBe('Ridestore - T-shirts Buy online here!');
    })
  );
});
