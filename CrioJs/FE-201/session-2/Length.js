/* 
Crio Methodology

Milestone 1: Understand the problem clearly
1. Ask questions & clarify the problem statement clearly.
2. Take an example or two to confirm your understanding of the input/output

Milestone 2: Finalize approach & execution plan
1. Understand what type of problem you are solving and see if you can recollect solving similar problems in the past
    a. Obvious logic (this would only test ability to convert logic to code)
    b. Figuring out logic
    c. Knowledge of specific algorithm, data structure or pattern
    d. Knowledge of specific domain or concepts
    e. Mapping real world into abstract concepts/data structures
2. Brainstorm multiple ways to solve the problem and pick one based on the TC/SC requirements
3. Get to a point where you can explain your approach to a 10 year old

Milestone 3 : Come up with an “Instruction Manual” for a 10 year old
1. Take a stab at the high-level logic & write it down like a detailed Instruction Manual for a 10 Year old where each line of the manual can be expanded into a logical line(s) of code.
2. Try to offload logic out of the main section as much as possible by delegating to functions.

Milestone 4: Code by expanding your 10 Year Old’s "Instruction Manual”
1. Run your code snippets at every logical step to test correctness (Helps avoid debugging larger pieces of code later)
2. Make sure you name the variables, functions clearly.
3. Use libraries as much as possible

Milestone 5: Prove that your code works using custom test cases
1. Make sure you check boundary conditions and other test cases you noted in Milestone 1
    a. If compiler is not available, dry run your code on a whiteboard or paper
2. Suggest optimizations if applicable during interviews
*/
class Length {
  constructor(ft, inch) {
    this.ft = ft;
    this.inch = inch;
  }
  isValidObject() {
    return this.ft >= 0 && this.inch >= 0 ? true : false;
  }
  addLength(lengthObj) {
    if (!this.isValidObject() || !lengthObj.isValidObject()) {
      return [0, 0];
    } else {
      let ft = this.ft + lengthObj.ft;
      let inch = this.inch + lengthObj.inch;

      while (inch >= 12) {
        ft += Math.floor(inch / 12);
        inch = inch % 12;
      }
      return [ft, inch];
    }
  }
}
const length1 = new Length(5, 11); //corresponding to 5 ft 11 inches
const length2 = new Length(2, 8); // corresponding to 2 ft 8 inches.
const sum = length1.addLength(length2); // the sum will be an array containing `[8, 7]`
console.log(sum);

module.exports = Length;
