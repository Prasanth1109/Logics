let a=[0,1,2,3,0,0,0]
let m=3;
let b = [2,9,6]
let n=3
let mergedArray = [...a,...b]
function sortFuctions(arr) {    
    for (i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
let sortedArray =sortFuctions(mergedArray)
console.log(sortedArray)
 
let resultArray =[]
for(i=0;i<sortedArray.length;i++){
  if(sortedArray[i]!==0){
  resultArray.push(sortedArray[i])
  }
}
console.log(resultArray);