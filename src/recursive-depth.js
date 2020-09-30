const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
let deep = 1;
    for (let i=0; i<=arr.length; i++) {
      let num =1;
      if (Array.isArray(arr[i])) {
        num += this.calculateDepth(arr[i]);
        deep =Math.max(num, deep)
    }

  }
  return deep;
}
};