!(function (angular) {
    var http = angular.module("moviecat.services.http",[]);
    http.service("HttpServices",["$document","$window",function ($document,$window) {
        
        this.jsonp = function (url,data,callback) {
            //0.处理data数据
            //1.处理传过来的URL地址
            //2.创建script标签,把地址赋给script的src
            //3.把callback函数挂载到全局作用域
            //4.把script添加到页面上
            var queryString =  url.indexOf("?") == -1 ? '?' : '';

            for(var key in data){
                queryString += key+'='+ data[key] + '&';
            }
            var cbName = 'mc_qs_p'+ Math.random().toString().replace(".","");
            var url = url + queryString + 'callback='+ cbName;

            $window[cbName] = callback;

            var oScript = $document[0].createElement('script');

            oScript.src = url;

            $document[0].body.appendChild(oScript);
            $document[0].body.removeChild(oScript);

        }
       
    }]);
})(angular);