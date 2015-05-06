
(function(){
    
    var module = angular.module("githubApp");
    
    var RepoCtrl = function($scope, $routeParams, githubService){
        var reponame = $routeParams.reponame;
        var username = $routeParams.username;
        
        var onRepo = function(data){
            $scope.repo = data;
            //console.log(data);
        };
        
        var onError = function(reason){
            $scope.error = reason;
        };
        
        githubService.getRepoDetails(username, reponame)
            .then(onRepo, onError);
    };
    
    module.controller('RepoCtrl',["$scope", "$routeParams", "githubService", RepoCtrl]);
    
}());
