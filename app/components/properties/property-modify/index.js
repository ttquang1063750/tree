/**
 * Created by quangtang on 5/30/17.
 */
(function () {
  angular
      .module("app")
      .component("propertiesComponent", {
        bindings:{
          selected: "="
        },
        templateUrl:"properties/property-modify/index.html"
      })
})();