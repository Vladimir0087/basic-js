const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
 if (!Array.isArray(members)) return false;
 let newArr = [];
 for (let name of members) {
   if (typeof name === "string") {
     name = name.trim();
    newArr.push(name[0].toUpperCase())
   }
 }
 newArr.sort();
return newArr.join("");
}



