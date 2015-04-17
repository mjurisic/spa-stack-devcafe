var animals;
(function (animals) {
    var Dog = (function () {
        function Dog() {
            this.speak = function () {
                return 'woof';
            };
        }
        return Dog;
    })();
    animals.Dog = Dog;
    var Cat = (function () {
        function Cat() {
            this.speak = function () {
                return 'meow';
            };
        }
        return Cat;
    })();
    animals.Cat = Cat;
    var Mouse = (function () {
        function Mouse() {
            this.speak = function () {
                return 'eek';
            };
        }
        return Mouse;
    })();
})(animals || (animals = {}));
function testSpeak(animal) {
    console.log('animal says:' + animal.speak());
}
function arraySpeak(animals) {
    //animals.forEach(
    console.log('bla');
    var c = console;
    c.table(animals);
}
var tom = new animals.Cat();
testSpeak(tom);
var pongo = new animals.Dog();
testSpeak(pongo);
// is not visible because not exported
//animals.Mouse 
//# sourceMappingURL=Modules.js.map