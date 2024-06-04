/** Minimum Number in Rotated Sorted Array **
 * 
 * Given a rotated sorted array, return the smallest 
 * number in the array.
 * 
 * Note: Your solutions' time complexity must be faster than O(n). 
 * 
 * @example
 * findMinimum([5, 4, 1, 2]) -> 1
 * findMinimum([7, 9, 12, 3, 4]) -> 3
 * findMinimum([3, 4, 2, 0]) -> 0
 * 
 */

const findMinimum = (nums) => {
    let L = 0
    let R = nums.length - 1
    let mid = Math.floor((L + R) / 2)
    while (L <= R) {
        let mid = Math.floor((L + R) / 2)
        if (nums[mid] > nums[R]) {
            L = mid + 1
        } else {
            R = mid
        }
    }

    return nums[L]


}


module.exports = findMinimum;