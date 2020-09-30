const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let turn = 2 ** disksNumber - 1;
  let second = Math.floor(turn * 3600 / turnsSpeed);
  let obj = {
    turns: turn,
    seconds: second
  };
  return obj;
};
