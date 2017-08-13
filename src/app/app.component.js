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
      <h1>Hello World!</h1>
      <ridestore-products-list category-id="208"></ridestore-products-list>
    </div>
  `
};
