angular.module('myApp').controller('searchController',
['$scope', '$location',
function($scope, $location) {
//  $scope.subsubpage = 'templates/defineSeedPhrase/defineSeedPhrase.template.html';

  $scope.queries = [
    {
      nlq: "cad, coronary artery disease",
      ogy: "",
      uc: "diabetes",
      cr: "",
      name: "coronary artery disease"
    }
  ];

  $scope.search = function() {
    $scope.queries.push({
      nlq: $scope.sform.nlq,
      ogy: $scope.sform.ogy,
      uc: $scope.sform.uc,
      cr: $scope.sform.cr,
      name: $scope.sform.name
    });
    $scope.sform = {};
  };
}]);
