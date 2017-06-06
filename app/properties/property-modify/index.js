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
        templateUrl:"app/properties/property-modify/index.html"
      })
})();