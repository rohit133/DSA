/**
 * @param {string} name
 * @param {number} age
 * @param {string} college
 * @param {string} city
 * @param {string} country
 * @return {object}
 */

function methodOnObject(name, age, college, city, country) {
  return { name, age, college, city,  country,
    getCity () {
      return `${this.name} lives in ${this.city}.`;
    }
  } 
}
  
  console.log((methodOnObject("Abhinav", 22, "IIT Patna", "Patna", "India").getCity() ))
  // === "Abhinav lives in Patna."

  if ((methodOnObject("Abhinav", 22, "IIT Patna", "Patna", "India").getCity() === "Abhinav lives in Patna."))
    console.log("Sample test case 1 passed!");
  else
    console.log("Sample test case 1 failed!");
  
  if ((methodOnObject("Ankur", 20, "IIT Kanpur", "Kanpur", "India").getCity() === "Ankur lives in Kanpur."))
    console.log("Sample test case 2 passed!");
  else
    console.log("Sample test case 2 failed!");
  
  module.exports = methodOnObject
  