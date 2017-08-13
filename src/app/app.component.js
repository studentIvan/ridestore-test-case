/**
 * General application component
 */
export const AppComponent = {
  template: `
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Ridestore</a>
      </nav>
    </header>
    <div class="container-fluid">
      <ridestore-products-list ng-if="$ctrl.categoryId" category-id="$ctrl.categoryId"></ridestore-products-list>
    </div>
  `,
  controller($log, $stateParams, $timeout) {
    'ngInject';

    $timeout(() => {
      this.categoryId = parseInt($stateParams.categoryId || 208, 10);
    });
  }
};
