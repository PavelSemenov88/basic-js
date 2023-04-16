const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    arr.forEach(elem => {
      let сountLoc = 1;
      if(typeof (elem) === 'object') {
        сountLoc += this.calculateDepth(elem);
      }

      if(сountLoc > count) {
        count = сountLoc;
      }
      

    })
    return count
  }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

}

module.exports = {
  DepthCalculator
};
