var app = angular.module('App', []);

app.controller('AppController', function($scope){
  $scope.display = function(){
    $scope.flag = false;
  };
});
