angular.module('myApp').controller('defineSeedPhraseController',
['$scope', '$location',
function($scope, $location) {
  $scope.concepts  = [
    {
      name: "coronary artery disease",
      seedPhrases: [
        "coronary artery disease", "symptoms", "treatments"
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
