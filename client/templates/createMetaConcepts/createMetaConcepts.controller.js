angular.module('myApp').controller('createMetaConceptsController',
['$scope', '$location',
function($scope, $location) {
  $scope.concepts  = [
    {
      name: "coronary artery disease",
      seedPhrases: [
        "coronary artery disease", "symptoms", "treatments"
      ]
    },
    {
      name: "diabetes",
      seedPhrases: [
        "type 1"
      ]
    }
  ];

  

}]);
