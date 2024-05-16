const nums =[-2,1,-3,4,-1,2,-5,0]

let slice;
let sum;

/* O(n^3) O(n) space
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
        const subarray = (nums.slice(i,j))
        const sum = subarray.reduce((acc,cur) => acc + cur)
        console.log()


    }
}

*/


/*
const maxSubArray = (nums) => {
    let maxSum = nums[0];

    //O(n^2) O(1) space
    for (let i = 0; i < nums.length; i++) { O(n)
        let sum = 0;
        for (let j = i; j < nums.length; j++) { O(n)
            sum += nums[j]
            Math.max(maxSum, sum)

        }
    }

    return maxSum
}
*/

const maxSubArray = (nums) => {
    let maxSum = nums[0];

    //O(n^2) O(1) space
    for (let i = 0; i < nums.length; i++) { O(n)
        let sum = 0;
        for (let j = i; j < nums.length; j++) { O(n)
            sum += nums[j]
            Math.max(maxSum, sum)

        }
    }

    return maxSum
}



