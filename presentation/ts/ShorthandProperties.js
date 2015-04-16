var Person = (function () {
    function Person(name, nickname) {
        this.name = name;
        this.nickname = nickname;
    }
    return Person;
})();
var joe = new Person('Joe', 'none');
console.log(joe.name);
//# sourceMappingURL=ShorthandProperties.js.map