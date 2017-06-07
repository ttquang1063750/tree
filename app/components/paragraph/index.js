(function () {
  angular
      .module('app')
      .component('paragraphComponent', {
        bindings: {item: '='},
        templateUrl: 'paragraph/index.html'
      })
})();