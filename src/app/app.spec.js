import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'angular-mocks';
import { AppComponent } from './app.component';

describe('app component', () => {
  beforeEach(() => {
    angular
      .module('app', [uiRouter])
      .component('app', AppComponent);
    angular.mock.module('app');
  });
  it('should render Ridestore header', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    const navbarBrand = element.find('nav');
    expect(navbarBrand.html()).toContain('Ridestore');
  }));
});
