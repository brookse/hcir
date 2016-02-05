angular.module('myApp').controller('defineRelevanciesController',
['$scope', '$location',
function($scope, $location) {
  $scope.candidateResults = [
    {
      term: "heart attack",
      context: "A heart attack occurs if ...",
      fullContext: "A heart attack occurs if the flow of oxygen-rich blood to a section of heart muscle is cut off.",
      sourceName: "National Heart, Lung, and Blood Institute",
      source: "http://www.nhlbi.nih.gov/health/health-topics/topics/cad",
      relevancy: .68
    },
    {
      term: "chest pain",
      context: "... lead to chest pain (angina) or ...",
      fullContext: "This can lead to chest pain (angina) or a heart attack.",
      sourceName: "U.S. National Library of Medicine",
      source: "https://www.nlm.nih.gov/medlineplus/coronaryarterydisease.html",
      relevancy: .57
    },
    {
      term: "aspirin",
      context: "... are some cases where aspirin isn't appropriate, such as ...",
      fullContext: "There are some cases where aspirin isn't appropriate, such as if you have a bleeding disorder or you're already taking another blood thinner, so ask your doctor before starting to take aspirin.",
      sourceName: "Mayo Clinic",
      source: "http://www.mayoclinic.org/diseases-conditions/coronary-artery-disease/diagnosis-treatment/treatment/txc-20165340",
      relevancy: .64
    },
    {
      term: "beta-blockers",
      context: "... had a heart attack, beta blockers reduce the risk of ...",
      fullContext: "If you've had a heart attack, beta blockers reduce the risk of future attacks.",
      sourceName: "Mayo Clinic",
      source: "http://www.mayoclinic.org/diseases-conditions/coronary-artery-disease/diagnosis-treatment/treatment/txc-20165340",
      relevancy: .26
    },
    {
      term: "diabetes",
      context: "Diabetes is associated with an ...",
      fullContext: "Diabetes is associated with an increased risk of coronary artery disease.",
      source: "http://www.mayoclinic.org/diseases-conditions/coronary-artery-disease/symptoms-causes/dxc-20165314",
      sourceName: "Mayo Clinic",
      relevancy: .45
    },
    {
      term: "high LDL cholesterol",
      context: "... of the body), a high LDL cholesterol level can dramatically ...",
      fullContext: "Although LDL is necessary in limited quantities (LDL delivers cholesterol to various parts of the body), a high LDL cholesterol level can dramatically increase your risk of a heart attack.",
      source: "http://www.pcrm.org/health/health-topics/cholesterol-and-heart-disease",
      sourceName: "Physicians Committee for Responsible Medicine",
      relevancy: .35
    },
    {
      term: "CAD",
      context: "... Coronary artery disease (CAD) is the most ...",
      fullContext: "Coronary artery disease (CAD) is the most common type of heart disease.",
      sourceName: "U.S. National Library of Medicine",
      source: "https://www.nlm.nih.gov/medlineplus/coronaryarterydisease.html",
      relevancy: .80
    }
  ];

  $scope.increaseRelevancy = function() {

  };

  $scope.decreaseRelevancy = function() {

  };

}]);
