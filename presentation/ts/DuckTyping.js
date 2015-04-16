var Mallard = (function () {
    function Mallard() {
        this.walk = function () {
            return 'walking like a duck';
        };
    }
    return Mallard;
})();
function duckWalk(duck) {
    console.log('walking my duck which is ' + duck.walk());
}
var duckInstance = new Mallard();
var dog = {
    walk: function () {
        return 'walking like a dog';
    },
    talk: function () {
        return 'woof';
    }
};
duckWalk(duckInstance);
duckWalk(dog);
//# sourceMappingURL=DuckTyping.js.map