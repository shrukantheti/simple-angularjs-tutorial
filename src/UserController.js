// Code goes here
(function() {
    var app = angular.module("sampleApp");
    var UserCtrl = function($scope, githubService, $routeParams) {
        var onUserComplete = function(data) {
            $scope.user = data;
            githubService.getRepos($scope.user)
                .then(onRepos, onError);
        };

        var onRepos = function(data) {
            $scope.repos = data;
        };

        var onError = function(err) {
            $scope.message = "Could not fetch";
        };

        $scope.username = $routeParams.username;
        $scope.repoSortOrder = "-stargazers_count";
        
        githubService.getUser($scope.username).then(onUserComplete, onError);
    };
    app.controller('UserCtrl', ["$scope", "githubService", "$routeParams", UserCtrl]);

})();
