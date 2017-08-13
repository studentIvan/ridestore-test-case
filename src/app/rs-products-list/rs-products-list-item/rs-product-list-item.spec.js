import angular from 'angular';
import 'angular-mocks';
import { RidestoreProductsListItemComponent } from './rs-products-list-item.component';

describe('RidestoreProductsListItemComponent', () => {
  beforeEach(() => {
    angular
      .module('app', [])
      .component('ridestoreProductsListItem', RidestoreProductsListItemComponent);
    angular.mock.module('app');
  });

  it('should render price', angular.mock.inject(($rootScope, $compile) => {
    $rootScope.product = { price: 180 };

    const element = $compile(
      '<ridestore-products-list-item product="product"></ridestore-products-list-item>'
    )($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain('180 €');
  }));

  it('should render title correctly', angular.mock.inject(($rootScope, $compile) => {
    $rootScope.product = {
      id: 280674, brand: 'Newsoul', department: 'Streetwear',
      productype: 'T-shirt', shortname: 'Bloom', price: 180
    };

    const element = $compile(
      '<ridestore-products-list-item product="product"></ridestore-products-list-item>'
    )($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain('Newsoul Bloom T-shirt');
  }));

  it('should render image correctly', angular.mock.inject(($rootScope, $compile) => {
    $rootScope.product = {
      id: 280674, brand: 'Newsoul', department: 'Streetwear',
      productype: 'T-shirt', shortname: 'Bloom', price: 180,
      image: 'D/5/D5439_1.jpg'
    };

    const element = $compile(
      '<ridestore-products-list-item product="product"></ridestore-products-list-item>'
    )($rootScope);
    $rootScope.$digest();
    const img = element.find('img');
    expect(img.attr('src'))
      .toContain('https://ridestore.imgix.net/catalog/product/D/5/D5439_1.jpg');
  }));

  it('should render sale_price correctly', angular.mock.inject(($rootScope, $compile) => {
    $rootScope.product = {
      id: 280674, brand: 'Newsoul', department: 'Streetwear',
      productype: 'T-shirt', shortname: 'Bloom', price: 180,
      sale_price: 90
    };

    const element = $compile(
      '<ridestore-products-list-item product="product"></ridestore-products-list-item>'
    )($rootScope);
    $rootScope.$digest();

    const html = element.html();
    expect(html).toContain('class="rs-product-preview__price');
    expect(html).toContain('180 €');
    expect(html).toContain('rs-product-preview__price--sale');
    expect(html).toContain('class="rs-product-preview__sale-price');
    expect(html).toContain('90 €');
  }));
});
