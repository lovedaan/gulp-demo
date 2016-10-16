!(function (angular) {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('moviecat', [
      'ngRoute',
      'moviecat.detail',
      'moviecat.list',
      'moviecat.auto-focus'
    ])
    //为模块定义一些常量
    .constant('AppConfig',{
        pageSise : 10,
        listApiUrl : 'https://api.douban.com/v2/movie/',
        detailApiUrl : 'https://api.douban.com/v2/movie/subject/'
    })
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
    }])
    .controller("navController",["$scope","$route","AppConfig",function ($scope,$route,AppConfig) {
        console.log(AppConfig);
        $scope.text = '';

        $scope.search = function () {
            $route.updateParams({type : 'search',q : $scope.text});
        }

    }]);

})(angular);