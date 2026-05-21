import person from "./person.js";

export default class student extends person {
    constructor(name, age, nim, major){
        super(name, age);
        this.nim = nim;
        this.major = major;
    }
    
    study(){
        console.log(`${this.name} (NIM: ${this.nim}) sinau neng ${this.major}`)
    }
}   
    