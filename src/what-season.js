const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) return "Unable to determine the time of year!";

  if(!(date instanceof Date) || Object.getOwnPropertyNames(date).length) throw new Error('Invalid date!');
  

  let numbMonth = date.getMonth();

  if(numbMonth > 1 && numbMonth < 5) return 'spring';
  if(numbMonth > 4 && numbMonth < 8) return 'summer';
  if(numbMonth > 7 && numbMonth < 11) return 'autumn ';
  if(numbMonth === 11 || numbMonth < 2) return 'winter';
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
