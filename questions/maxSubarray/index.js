/** Maximum Subarray
  *  
  * Given an integer array `nums`, find the subarray which has the 
  * largest sum and return the sum. 
  * 
  * @examples
  * maxSubArray([5, 4, -1, 7, 8]) = 23
  * maxSubArray([-2, 1, -3, 4, -1, 2, -5, 0]) = 5
  * maxSubArray([2, 4, 3, -1, -4, -9]) = 9
  */

const maxSubArray = (nums) => {
    let maxsum = nums[0]
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (sum < 0) {
            sum = 0;
        }

        sum += nums[i]

        maxsum = Math.max(maxsum, sum)
    }
    return maxsum


}

//DO NOT EDIT BELOW THIS LINE
module.exports = maxSubArray;
