angular.module('myApp').controller('defineRelationsController',
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
        "type 1", "blood glucose", "obesity", "hypertension"
      ]
    },
    {
      name: "congestive heart failure",
      seedPhrases: [
        "edema", "athero schlerosis", "hypertension"
      ]
    },
    {
      name: "hepatitis",
      seedPhrases: [
        "liver failure", "jaundice", "alcohol"
      ]
    },
    {
      name: "cirrhosis",
      seedPhrases: [
        "liver damage", "hypertension"
      ]
    }
  ];

  $scope.currentMap = "";

  $scope.showMap = function(name) {
    console.log('name clicked:', name);
    $scope.currentMap = name;
  }

}]);
