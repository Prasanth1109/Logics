/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxValue = height[0]; // Assume the first element is the largest

    for (let i = 1; i < height.length; i++) {
        if (height[i] > maxValue) {
            console.log(height[i]);
            maxValue = height[i];
        }
    }
    console.log("<><><>", maxValue);

    let minValue = height[0]; // Assume the first element is the smallest

    for (let i = 1; i < height.length; i++) {
        if (height[i] < minValue) {
            minValue = height[i];
        }
    }
    console.log("<><><>", minValue);

    
    // for(let i = 0; i < height; i++){
    //     for(let j = 0; j < width; j++){

    //     }
    // }
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));