interface Duck {
    walk():string;
}

class Mallard implements Duck {
    walk = ():string => {
        return 'walking like a duck';
    }
}

function duckWalk(duck:Duck) {
    console.log('walking my duck which is ' + duck.walk());
}

var duckInstance = new Mallard();

var dog = {

    walk: ():string  => {
        return 'walking like a dog';
    },
    talk: ():string => {
        return 'woof';
    }
};

duckWalk(duckInstance);
duckWalk(dog);
