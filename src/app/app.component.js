import template from './app.html';

/**
 * General application component
 */
export const AppComponent = {
  template,
  controller($log, $stateParams, $timeout) {
    'ngInject';

    $timeout(() => {
      /**
       * We using $timeout here to be sure that $stateParams has initialised
       * The parseInt works here just in case to be sure that we working with number
       * @type {number}
       */
      this.categoryId = parseInt($stateParams.categoryId || 208, 10);
    });
  }
};
