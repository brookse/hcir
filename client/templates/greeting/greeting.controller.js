angular.module('myApp').controller('greetingController',
['$scope', '$location',
function($scope, $location) {
  $scope.goToSPD = function() {
    $scope.subpage = 'partials/patientLearning/patientLearning.template.html'
  };

  $scope.goToDSP = function() {
    $scope.subpage = 'partials/conceptLearning/conceptLearning.template.html'
  };

}]);
