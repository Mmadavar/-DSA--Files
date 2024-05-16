

//remove last iteration
//remove unecessary loops
// O(n^2)2
// O(1) space because not storing a space of length n
//mid level solution
/*const twoSum = (nums, target) => {

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(i,j)
      }
    }
  }

}*/

//top tech solution
// O(n) time(loop through it once)

const nums = [1,2,4,9]
const target = 13

const map = new Map();

for (let i = 0; i < nums.length; i++) {
  map.set(nums[i],i)

  if (nums[i] === target) {
    console.log(map.get(4)) // O(1) time
  }
}



