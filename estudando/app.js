
var codeAmApp = angular.module("codeAmApp", []);

codeAmApp.controller("ivanctrl", ["$scope", function ($scope){

    $scope.name = "Ivan Anjos";

$scope.habilitarnome = function(novonome){
        $scope.name = novonome;
    }



}
]);



codeAmApp.controller("outroctrl", ["$scope", function ($scope){

    $scope.name = "Controle 2";
}
]);