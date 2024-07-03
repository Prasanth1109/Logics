let a=[
    {
        name:'bala',
        age:23
    },
    {
        name:'arun',
        age:3
    },
    {
        name:'anita',
        age:43
    }
];

function sortArray(arr) {    
    for (i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - 1; j++) {
            if (arr[j].age > arr[j + 1].age) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
};

let sortedData = sortArray(a);

console.log(sortedData);

