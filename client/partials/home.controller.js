angular.module('myApp').controller('homeController',
['$scope', '$location',
function($scope, $location) {

  $scope.subpage='templates/greeting/greeting.template.html';

}]);
