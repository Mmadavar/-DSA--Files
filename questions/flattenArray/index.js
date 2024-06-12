/** Flatten Array **
 * 
 * Given an array 'nums' that can have nested arrays inside it,
 * flatten the array. 
 *  
 * 
 * @example
 * flatten([1, 2, 3, [4, 5]]) -> [1, 2, 3, 4, 5]
 * flatten([1, 2, 3, [4, [5]]]) -> [1, 2, 3, 4, 5]
 * flatten([1, [2, 3, [4, [5]]]]) -> [1, 2, 3, 4, 5]
 * 
 */

 const flatten = (nums) => {
     let results = []
     flatten(nums)
     function flatten(nums) {
      for (let elem of nums) {
          if (Array.isArray(elem)) {
           flatten(elem)
          } else {
           results.push(elem)
          }
       }
      }

      return results




 };

module.exports = flatten; 