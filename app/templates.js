angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('select/index.html','<select\n    ng-model="$ctrl.item.model"\n    ng-style="$ctrl.item.properties.element.styles | toObject"\n    ng-class="$ctrl.item.properties.element.classes"\n>\n  <option value="1">1</option>\n  <option value="2">2</option>\n</select>');
$templateCache.put('input/index.html','<input type="text"\n       ng-model="$ctrl.item.model"\n       ng-style="$ctrl.item.properties.element.styles | toObject"\n       ng-class="$ctrl.item.properties.element.classes"\n>');
$templateCache.put('stacked/index.html','<div dnd-list="$ctrl.item.children"\n     class="stacked {{$ctrl.selected == $ctrl.item ? \'selected\' : \'\'}}"\n     ng-style="$ctrl.item.properties.container.styles | toObject"\n     ng-class="$ctrl.item.properties.container.classes"\n     ng-click="$ctrl.selected = $ctrl.item;"\n>\n  <div\n      ng-repeat="(i, item) in $ctrl.item.children"\n      dnd-moved="$ctrl.item.children.splice(i, 1)"\n      dnd-draggable="item"\n      dnd-effect-allowed="move"\n      ng-style="item.properties.wrapper.styles | toObject"\n      ng-class="item.properties.wrapper.classes"\n      class="stacked {{$ctrl.selected == item ? \'selected\' : \'\'}}"\n      dnd-selected="$ctrl.selected  = item;"\n  >\n    <generator\n        item="item"\n        selected="$ctrl.selected"\n        ng-style="item.properties.generator.styles | toObject"\n        ng-class="item.properties.generator.classes"\n    ></generator>\n  </div>\n</div>');}]);