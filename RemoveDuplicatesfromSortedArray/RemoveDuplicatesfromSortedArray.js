/**
 * @param {number[]} nums
 * @return {number}
 */


// var removeDuplicates = function(nums) {
//     let nums1=[]
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] != nums[j]){
//                 nums1 = [...nums,nums[i]]
//                 // console.log();

//             }
//         }
//     }
//    return nums1
// };

var removeDuplicates = function(nums) {
    if (nums.length === 0) return { count: 0, nums: [] };
    
    let j = 1; // Pointer for unique elements
    
    for (let i = 0; i < nums.length; i++) {
       
        if (nums[i] !== nums[j - 1]) {
            nums[j] = nums[i]; // Update only when a new unique element is found
            j++; // Increment j to move to the next position for a unique element
        }
        console.log(j,"<<<", nums[j - 1]);
    }
    
    // Truncate the nums array to contain only unique elements
    nums.length = j;
    
    return { count: j, nums: nums }; // Return count and modified array nums
};





// removeDuplicates();


console.log(removeDuplicates([1,1,2]));