!(function (angular) {
    'use strict';

    //创建正在热映模块
    var module = angular.module('moviecat.list', ['ngRoute','moviecat.services.http']);

    //配置模块路由
    module.config(['$routeProvider', function($routeProvider) {
          $routeProvider.when('/:type/:d', {
                templateUrl: 'movie_list/view.html',
                controller: 'MovieListController'
          });
    }]);

    //创建控制器
    module.controller('MovieListController', ["$scope","$route","$routeParams","HttpServices","AppConfig",function($scope,$route,$routeParams,HttpServices,AppConfig) {
        $scope.subjects = [];
        $scope.msg = '';
        $scope.title = 'Loading...';
        $scope.loading = true;
        $scope.pageCount = 0;
        $scope.sum = 0;
        var count = AppConfig.pageSise;
        $scope.page = parseInt($routeParams.d);
        var satrt =  ($scope.page - 1) * count;
        //{"count" : 10, "start" : 1}
        HttpServices.jsonp(
            AppConfig.listApiUrl + $routeParams.type ,
            {"count" : count, "start" : satrt, "q" : $routeParams.q},
            function (data) {
                //console.log(data);
                $scope.subjects = data.subjects;
                $scope.sum = data.total;
                $scope.title = data.title;
                $scope.pageCount = Math.ceil(parseInt($scope.sum) / 5);
                $scope.loading = false;
                $scope.$apply();
            }
        );

        $scope.goPage = function (page) {
            $route.updateParams({ d : page});
        }

    }]);

})(angular);

//angular中使用jsonp请求数据的时候，URL地址后后面一定要加
//?callback=JSON_CALLBACK，参数名不能变
//angular会自动把callback的值替换成一个随机函数名
//?callback=angular.callbacks._0
//但是在请求豆瓣的API的时候，回调函数的名字不能有.,所以请求失败我们要自己写一个跨域方法
/*var url = 'http://api.douban.com/v2/movie/in_theaters';
$http({
    method: 'jsonp',  
    url: url+'?callback=JSON_CALLBACK'
}).then(function successCallback(res) {
    console.log(res);
    if(res.status == "200"){
        $scope.subjects = res.data.subjects;
    }else{
        $scope.msg = '请求数据有误，报错信息：'+ res.statusText;
    }
}, function errorCallback(error) {
    console.log(error);
    $scope.msg = '请求数据有误，报错信息：'+ error.statusText;
});*/

/*
 分页
 多少页(page)

 1  ==》 start 0  




 */