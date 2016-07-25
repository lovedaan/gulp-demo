!(function(){
    function Person(name,age){
        this.name = name;
        this.age = age;
    }
    Person.prototype.showName = function(){
        alert(this.name);
    }
    var a = new Person("张三",20);
    a.showName();
})();