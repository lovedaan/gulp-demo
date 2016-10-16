!(function (window,document,undefined) {
    
    var jsonp = function (url,data,callback) {
        var queryString =  url.indexOf("?") == -1 ? '?' : '';

        for(var key in data){
            queryString += key+'='+ data[key] + '&';
        }
        var cbName = 'mc_qs_p'+ Math.random().toString().replace(".","");
        var url = url + queryString + 'callback='+ cbName;

        window[cbName] = callback;

        var oScript = document.createElement('script');

        oScript.src = url;

        document.body.appendChild(oScript);
        document.body.removeChild(oScript);
    }

    window.$jsonp = jsonp;

})(window,document);