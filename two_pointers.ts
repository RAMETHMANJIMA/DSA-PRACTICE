//TWO POINTERS

// The Two Pointers technique is a common pattern in problem-solving, especially for sorted arrays, linked lists, or searching problems. 
// It involves using two pointers that traverse a data structure in a particular way to optimize the solution.

//EXAMPLE-REMOVING DUPLICATES FROM A SORTED ARRAY

function removeDuplicates(arr:number[]): number {
    if (arr.length == 0) return 0;

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]){
             i++;
             arr[i] = arr[j]; //unique element moved forward   
        }
       
    }
    return i+1;
}

let nums = [1, 1, 2, 3, 3, 4, 5, 5];
let newLength = removeDuplicates(nums);
console.log(newLength); // Output: 5
console.log(nums.slice(0, newLength)); // Output: [1, 2, 3, 4, 5]