const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (typeof sampleActivity !== "string") return false;
  if (+sampleActivity === false || Boolean(+sampleActivity) === false) return false;
  if (+sampleActivity > MODERN_ACTIVITY || +sampleActivity <= 0) return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.ceil(Math.log((MODERN_ACTIVITY / +sampleActivity) / k))
  return t;
};
