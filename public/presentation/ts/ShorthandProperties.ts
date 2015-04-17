class Person {
    constructor(public name:string, private nickname:string) {
    }
    //get fullname():string{
    //    return this.name + ' ' + this.nickname;
    //}
}

var joe = new Person('Joe', 'none');
console.log(joe.name);
