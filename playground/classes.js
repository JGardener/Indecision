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

// A student is a person, obviously, but they will have their own properties. 
// Extending Person means we get all the properties of Person, but we can add additional things to make it a Student
class Student extends Person {
  constructor(name, age, major){
    super(name, age);
    this.major = major
  }
  hasMajor(){
    return !!this.major 
  }
  getDescription(){
    let description = super.getDescription();
    if(this.hasMajor()){
      description += ` Their major is ${this.major}`
    }
    
    return description
  }
}


// Challenge
class Traveler extends Person {
  constructor(name, location){
    super(name);
    this.location = location
  }
  homeLocation(){
    return this.location;
  }
  getGreeting(){
    let greeting = super.getGreeting();
    if(this.homeLocation()){
      greeting += ` I'm visiting ${this.location}.`
    }
    return greeting;
  }

}


const me = new Traveler('James Gardener', "England");
console.log(me.getGreeting());

const other = new Traveler("James Gardener");
console.log(other.getGreeting());