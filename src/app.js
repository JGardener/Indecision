class Person {
  constructor(name = "Anon", age = 0) {
   this.name = name
   this.age = age
  } 
  getGreeting(){
    return `Hello, ${this.name}!`
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old.`
  }
}

const me = new Person('James Gardener', 27);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());