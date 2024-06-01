/** Two Sorted Sum **
 * 
 * Find two numbers in the given sorted array that add up to `target`
 * and return the indices of those two numbers in the array. 
 * 
 * 
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([2, 3, 4], 6) -> [0, 2]
 * 
 */

const twoSortedSum = (nums, target) => {
    let L = 0
    let R = nums.length - 1;
    while (L < R) {
        if (nums[L] + nums[R] === target) {
            return [L,R]
        }

        if (nums[L] + nums[R] > target) {
            R--;
        }

        if (nums[L] + nums[R] < target) {
            L++;
        }
    }


}

module.exports = twoSortedSum;
