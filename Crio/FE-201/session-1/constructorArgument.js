/**
 * @param {string} name
 * @param {number} age
 * @param {string} occupation
 * @return {object}
 */


function constructorArgument(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;

      return {
        name: this.name,
        age: this.age,
        occupation: this.occupation,
      } 
}
console.log(constructorArgument("John", 25, "Engineer"));

  
  if ((constructorArgument("John", 25, "Engineer").name === 'John') && (constructorArgument("John", 25, "Engineer").age == 25 && (constructorArgument("John", 25, "Engineer").occupation === 'Engineer')))
    console.log("Sample test case for input name = John, age = 25 and occupation = Engineer passed!");
  else
    console.log("Test fails: Expected {name: John, age: 25, occupation: Engineer}");
  
  
  
  module.exports = constructorArgument
  
  

// /**
//  * @param {string} par1
//  * @param {string} par2
//  * @param {number} par3
//  * @return {object}
//  */



// function constructor(par1, par2, par3) {
//     // You need to debug this problem. Just a hint constructor is not defined.
//       function Dog(par1, par2, par3) {
//         this.par1 = par1;
//         this.par2 = par2;
//         this.par3 = par3;
//         return {
//             name:  this.par1,
//             color:  this.par2,
//             numLegs:  this.par3,

//         }
//       }
//       let terrier = new Dog(par1, par2, par3);
//       return terrier;
//     }
    
//     console.log(constructor("George", "White", 4));
    
//     if (
//       constructor("George", "White", 4).name === "George" &&
//       constructor("George", "White", 4).color === "White" &&
//       constructor("George", "White", 4).numLegs === 4
//     )
//       console.log(
//         "Sample test case for input par1 = Geroge, par2 = White and par3 = 4 passed!"
//       );
//     else
//       console.log(
//         "Test fails: Expected output{name: George,color: White, numLegs: 4}"
//       );
    
//     module.exports = constructor;
    
    