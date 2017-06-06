(function () {
  angular
      .module('app')
      .component('stackedComponent', {
        bindings: {item: '=', selected:"="},
        templateUrl: 'stacked/index.html'
      })
})();