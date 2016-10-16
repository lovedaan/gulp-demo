!(function (angular) {
    
    angular.module("moviecat.auto-focus",[])
    .directive("autoFocus",["$location",function ($location) {
        
        return {
            restrict : 'A',
            link : function ($scope,element,attrs,ctroller) {
                //console.log(element);
                $scope.$location = $location;
                //console.log($location.path());
                $scope.$watch("$location.path()",function  (now) {
                    //console.log(element.children().attr("href"));
                    var aLink = element.children().attr("href");
                    var type = aLink.replace(/#(\/.+?)\/\d+/,"$1");
                    //console.log(element.parent());
                    if(now.startsWith(type)){
                        element.parent().children().removeClass('active');  
                        element.addClass('active');
                    }
                });
                
            }
        };

    }]);


})(angular);