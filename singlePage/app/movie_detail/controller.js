!(function (angular) {
    'use strict';

    //创建正在热映模块
    var module = angular.module('moviecat.detail', ['ngRoute','moviecat.services.http']);

    //配置模块路由
    module.config(['$routeProvider', function($routeProvider) {
          $routeProvider.when('/subject/:id', {
                templateUrl: 'movie_detail/view.html',
                controller: 'MovieDetailController'
          });
    }]);

    //创建控制器
    module.controller('MovieDetailController', ["$scope","$route","$routeParams","HttpServices","AppConfig",function($scope,$route,$routeParams,HttpServices,AppConfig) {
        $scope.data = {};
        $scope.loading = true;
        HttpServices.jsonp(
            AppConfig.detailApiUrl+$routeParams.id ,
            {},
            function (data) {
                console.log(data);
                $scope.data = data;
                $scope.loading = false;
                $scope.$apply();
            }
        );

    }]);

})(angular);
