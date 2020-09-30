const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options['addition']===undefined) {
    options['addition']="";
  } else if (options['addition']===null) {
    options.addition = "null"
  } else {
  options['addition'] = options['addition'].toString();
  }
  if (str===null) {
    str="null"
  } else {
    str = str.toString();
  }


  if (!options['additionRepeatTimes']) {
    options['additionRepeatTimes']=1;
  }
  if (!options['repeatTimes']) {
    options['repeatTimes']=1;
  }
  if (!options['separator']) {
    options['separator']="+";
  }
  if (!options['additionSeparator']) {
    options['additionSeparator']="|";
  }

  let cor= (str + (options['addition'] + options['additionSeparator']).repeat(options['additionRepeatTimes'] - 1) +
  options['addition'] + options['separator']).repeat(options['repeatTimes'] - 1) + (str + (options['addition'] + options['additionSeparator']).repeat(options['additionRepeatTimes'] - 1) +
  options['addition']);


  return cor;
};
