/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
    let count = 0;
    let result=0;
    for (let j = 0; j < nums.length; j++) {
        let newCount = 0;
        for (let i = j+1; i < nums.length; i++) {
            // console.log("nums[i]***", nums[i], "nums[j]++++", nums[j], "++++");
            if (nums[j] == nums[i]) {
                newCount++;
                if (count < newCount) {
                    count = newCount
                    result =nums[i]
                }
            }
        }

    }
    return result
};

console.log(majorityElement([2, 1,1,2, 1, 1, 1, 2, 2]));