angular.module('myApp').controller('defineSeedPhraseController',
['$scope', '$location',
function($scope, $location) {
  $scope.concepts = [
    {
      name: "concept 1",
      seedPhrases: [
        "one", "two", "three"
      ]
    }
  ];

  $scope.createConcept = function() {
    $scope.concepts.push({
      name: $scope.conceptForm.name,
      seedPhrases: $scope.conceptForm.seedphrases.split(',')
    });
    $scope.conceptForm = {};
    console.log('new concept array: ', $scope.concepts)
  };
}]);
