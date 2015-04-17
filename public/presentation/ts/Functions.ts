class Greeter {
    greeting: string = 'Greetings earthlings';
    sayHello = function (name:string):string {
        return 'Hello ' + name;
    };

    converse = function (name:string, name2?:string):string {
        var conversation:string = 'Bla bla ' + name;
        if (name2) {
            conversation += ' ... ' + name2;
        }
        return conversation;
    }

    entertain = function (...names:string[]):string {
        var conversation:string = '';
        for (var person in names) {
            conversation += ' hi ' + names[person] + ' ..';
        }
        return conversation;
    }

    checkTHISout = function () {
        return function() {
            console.log(this.greeting);
        };

    }

    checkTHISoutNowWithLambda = function () {
        return () => {
            console.log(this.greeting);
        };

    }
}

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