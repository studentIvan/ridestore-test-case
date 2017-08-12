import angular from 'angular';
import 'angular-mocks';
import { AppComponent } from './app.component';

describe('app component', () => {
  beforeEach(() => {
    angular
      .module('app', [])
      .component('app', AppComponent);
    angular.mock.module('app');
  });
  it('should render hello world', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    const h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
