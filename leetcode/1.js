// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//단순하게 이중반복문을 돌며 모든 두 값의 조합을 확인해 합이 target이 되는 조합의 인덱스를 return
var twoSum = function(nums, target) {
    const length = nums.length;
    for(let i = 0; i < length; i++){
        for(let j = i + 1; j < length; j++){
            if(nums[i] + nums[j] === target) {
                return [i, j];
            };
        }
    }
};