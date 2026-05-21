export default class person{
    constructor(name,  age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`halo nama saya ${this.name}, Umur ${this.age}`);
    }
}