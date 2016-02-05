angular.module('myApp').controller('createMetaConceptsController',
['$scope', '$location',
function($scope, $location) {
  $scope.metaconcepts = [];
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

  $scope.operations = [
    {
      name: "and",
      text: "show results that occur only in both concepts."
    },
    {
      name: "and not",
      text: "exclude results of the second concept from results of the first"
    },
    {
      name: "or",
      text: "show all results that occr in each concept"
    }
  ];

  $scope.addMetaConcept = function () {
    $scope.metaconceptsholders = [];
    $scope.metaconceptsholders.push({
      name1: "",
      operation: "",
      name2: ""
    });
  }

  $scope.saveMetaConcept = function() {
    console.log("sgdsfg:",$scope.newconcept.name1);
    $scope.metaconcepts.push({
      name1: $scope.newconcept.name1,
      operation: $scope.newconcept.operation,
      name2: $scope.newconcept.name2
    });
    $scope.newconcept = {};
  }
}]);
