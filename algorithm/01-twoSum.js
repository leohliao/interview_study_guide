// https://leetcode.com/problems/two-sum/discuss/182680/JavaScript-Beats-86

var twoSum = function (nums, target) {
  if (nums.length === 2) return [0, 1];
  const len = nums.length;
  let map = {};
  for (let i = 0; i < len; i++) {
    let n = target - nums[i];
    let find = map[n];
    if (find !== undefined) return [find, i];
    else map[nums[i]] = i;
  }
};
const arr = [11, 2, 7, 15];
const targetNum = 9;
console.log(twoSum(arr, targetNum));
