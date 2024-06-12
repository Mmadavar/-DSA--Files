/** Move Zeroes **
 * 
 * Given an array 'nums', move all the zeroes to the end.
 * 
 * Note: You can not make a copy of the 'nums' array.
 * 
 * @example
 * moveZeroes([1, 0, 2, 0]) -> [1, 2, 0, 0]
 * moveZeroes([10, 0, 9]) -> [10, 9, 0]
 * moveZeroes([3, 4, 0, 2, 0]) -> [3, 4, 2, 0, 0]
 * 
 */

 const moveZeroes = (nums) => {
  let L = 0
  let R = 0
  while (R < nums.length) {
   if (nums[R] !== 0) {
    let temp = nums[R]
    nums[R] = nums[L]
    nums[L] = temp
    L += 1
   }
   R += 1

  }
  return nums



}

module.exports = moveZeroes;