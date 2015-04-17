var Greeter = (function () {
    function Greeter() {
        this.greeting = 'Greetings earthlings';
        this.sayHello = function (name) {
            return 'Hello ' + name;
        };
        this.converse = function (name, name2) {
            var conversation = 'Bla bla ' + name;
            if (name2) {
                conversation += ' ... ' + name2;
            }
            return conversation;
        };
        this.entertain = function () {
            var names = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                names[_i - 0] = arguments[_i];
            }
            var conversation = '';
            for (var person in names) {
                conversation += ' hi ' + names[person] + ' ..';
            }
            return conversation;
        };
        this.checkTHISout = function () {
            return function () {
                console.log(this.greeting);
            };
        };
        this.checkTHISoutNowWithLambda = function () {
            var _this = this;
            return function () {
                console.log(_this.greeting);
            };
        };
    }
    return Greeter;
})();
var greeter = new Greeter();
console.log(greeter.sayHello('you'));
console.log(greeter.converse('lina', 'mirana'));
console.log(greeter.entertain('alice', 'bob', 'trudy'));
//this binds to window / global object, returns undefined
var check = greeter.checkTHISout();
check();
//using lambda binds this to parent context
var catch22 = greeter.checkTHISoutNowWithLambda();
catch22();
//# sourceMappingURL=Functions.js.map