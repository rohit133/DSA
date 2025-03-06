
// Method overriding
// Super keyword 
// Inheritance in Classes
// Class Syntax - create objects
// Inheritance among constructor fn
// How constructor fn leverage it
function Student(name, rollNo) {
    // this = {}
    this.name = name;
    this.rollNo = rollNo;
    // this.sayHello = function() {
    //   console.log('Hi My Name is ' +  this.name + ' and my roll no is' + this.rollNo)
    // }
    // Object.setPrototypeOf(this, Student.prototype);
    // return this
  }
  
  // Student.prototype = {}
  Student.prototype.sayHello = function() {
      console.log('Hi My Name is ' +  this.name + ' and my roll no is' + this.rollNo)
  }
  
  // let parent = {
  //   sayHello() {
  //     console.log('Hi My Name is ' +  this.name + ' and my roll no is ' + this.rollNo)
  //   }
  // }
  
  let s1 = new Student('Rohit', 1);
  let s2 = new Student('Suhas', 2);
  let s3 = new Student('Aakansha', 3);
  
  // Object.setPrototypeOf(s1, parent); // s1 -> parent
  // Object.setPrototypeOf(s2, parent); // s2 -> parent
  // Object.setPrototypeOf(s3, parent); // s3 -> parent
  
  console.log(s1, s2, s3)
  
  
  s1.sayHello();
  s2.sayHello();
  s3.sayHello();
  
  
  
  
  // Prototypal Inheritance 
  let gp = { x: 100, y: 200, z: 3 }
  let p = { x: 1 };
  let c1 = { y: 2 };
  
  // console.log(c1);
  Object.setPrototypeOf(c1, p); // c1 -> p
  // Object.setPrototypeOf(c1, gp) // c1 -x-> p | c1 -> gp
  Object.setPrototypeOf(p, gp) // p -> gp
  // Object.assign(c1, p);
  p.x = 10;
  // console.log('y>', c1.y);
  // console.log('x>', c1.x); 
  // x is not in c1
  // does c1 has a backup? Yes
  // backup is p
  // Is x in p? Yes - p.x
  // console.log('z>', c1.z);
  // z is not c1
  // does c1 has a backup? Yes
  // back is p
  // Is z in p? No
  // does p has a backup ? Yes
  // backup is gp
  // is z in gp ? Yes - gp.z
  
  
  
  
  // Look at some important/interesting properties on fn
  // Look at a special constructor function
  // Object
  let o2 = new Object(); // let o2 = {};
  // console.log(o2);
  o2.x = 1;
  o2.y = 2;
  o2.z = 3;
  // console.log(o2);
  // console.log(Object.keys(o2));
  // console.log(Object.values(o2));
  // console.log(Object.entries(o2));
  
  let o3 = { a: 10 };
  Object.assign(o3, o2)
  // console.log(o3);
  
  let o4 = Object.assign({}, o2);
  // console.log(o4)
  // console.log(o2 === o4)
  
  
  // Functions can have properties
  // Create object using a function
  // Functions
  function fn1() { // key - value 
    // console.log('>> Hello <<', fn1.x)
  }
  // name - fn1
  // body() {....}
  
  
  fn1.x = 1;
  fn1.y = { z : 10 } 
  
  
  fn1()
  
  let o1 = new fn1();
  // {}
  // execute fn1 with this = {}
  // return {}
  // console.log(o1);
  
  
  

class Bike {
    constructor(name, cc) {
      this.name = name;
      this.cc = cc;
    }
    
    makeNoise() {
      console.log('Vroom.. Vroom..')
    }
  }
  
  let b1 = new Bike('Pulsar', 200)
  let b2 = new Bike('Honda', 150)
  
  console.log(b1)
  console.log(b2)
  
  b1.makeNoise()
  b2.makeNoise()
  
  
  // function Bike(name, cc) {
  //   this.name = name;
  //   this.cc = cc;
  // }
  
  // Bike.prototype.makeNoise = function() {
  //   console.log('Vroom...')
  // }
  
  // let b1 = new Bike('Pulsar', 200);
  // let b2 = new Bike('Honda', 150);
  
  // console.log(b1);
  // console.log(b2);
  
  
  // let parent = {};
  // parent.makeNoise = function() {
  //     console.log('Vroom... Vroom...')
  // }
  
  // Object.setPrototypeOf(b1, parent);
  // Object.setPrototypeOf(b2, parent);
  
  // b1.makeNoise();
  // b2.makeNoise();