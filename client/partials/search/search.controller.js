angular.module('myApp').controller('searchController',
['$scope', '$location',
function($scope, $location) {
//  $scope.subsubpage = 'templates/defineSeedPhrase/defineSeedPhrase.template.html';

  $scope.extraEntryNumbers = 0;
  $scope.entryPossibilities = [
    {
      title: "Natural Language Query",
      subtitle: "Free text entry"
    },
    {
      title: "Ontology Concept",
      subtitle: "Premade concept entry"
    },
    {
      title: "User Concept",
      subtitle: "Concepts defined from seed terms"
    },
    {
      title: "Patient Records",
      subtitle: "Database of patient records"
    }
  ];

  $scope.entrySequence = [
    {
      id: 0,
      possibilityId: 0
    }
  ]

  $scope.extraEntrySequence = [
  ];

  $scope.addField = function() {
    $scope.extraEntryNumbers++;
    $scope.entrySequence.push({
      id: $scope.extraEntryNumbers,
      possibilityId: 0
    });
    $scope.extraEntrySequence.push({
      id: $scope.extraEntryNumbers,
      possibilityId: 0
    });
    console.log('adding a new entry space. total spaces:',$scope.extraEntryNumbers);
    console.log('sequence:',$scope.entrySequence);
  };

  $scope.changeBody = function(newpid, entryid) {
    if(entryid == 0) {
      $scope.entrySequence[entryid].possibilityId = newpid;
    } else {
      $scope.extraEntrySequence[entryid-1].possibilityId = newpid;
    }
    console.log('newpid: ',newpid, ' | entryid: ',entryid);
  };

  $scope.queries = [
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

  $scope.print = function() {
    console.log('sequence:',$scope.entrySequence);
  }

}]);
