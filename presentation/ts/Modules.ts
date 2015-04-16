module animals {
    export interface Animal {
        speak:()=>string;
    }
    export class Dog implements Animal {
        speak = () => {
            return 'woof';
        }
    }
    export class Cat implements Animal {
        speak = () => {
            return 'meow';
        };
    }

    class Mouse implements Animal {
        speak = () => {
            return 'eek';
        }
    }
}

function testSpeak(animal:animals.Animal) {
    console.log('animal says:' + animal.speak());
}

var tom = new animals.Cat();
testSpeak(tom);

var pongo = new animals.Dog();
testSpeak(pongo);

// is not visible because not exported
//animals.Mouse