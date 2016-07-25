!(function(){
    var oBtn = document.querySelector('#btn');

    oBtn.onclick = function() {
        var oBox = document.createElement('div');
        oBox.style.width = 300;
        oBox.style.height = 300;
        oBox.style.border = '1px solid blue';
        document.body.appendChild(oBox);
    }
})();