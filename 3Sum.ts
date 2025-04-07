// A HashMap (or hash table) is a key-value data structure that allows for fast data retrieval, insertion, and deletion.

// Keys → Unique identifiers (e.g., string, number).

// Values → Data associated with the key.

// Uses hashing to store and retrieve values in O(1) average time complexity.

// // Brute Force Approach
// The brute force approach is a straightforward and simple method to solve a problem by trying all possible solutions and selecting the correct one. It is often inefficient but guarantees the correct answer.


//------------------------------------------------------------------------------

// 3 SUM
//Problem Statement:
// Given an array nums, find all unique triplets (a, b, c) such that:

// a + b + c = 0

// The same triplet should not be counted more than once.

function threeSumTarget(nums: number[], target: number): number[][] {
    nums.sort((a, b) => (a-b));
    const result: number[][] = [];

    console.log("sorted array:", nums);

    for (let i =0; i< nums.length -2; i++) {
        if (i > 0 && nums[i] === nums[i -1])continue;

        let left = i +1;
        let right = nums.length -1;

        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if(sum === target) {
                result.push([nums[i],nums[left],nums[right]]);
                    left++;
                    right--;
                    while (left < sum && nums[left] === nums[left - 1])
                        left++;
                    while (left < right && nums[right] === nums[right + 1])
                        right--;



                
            }
            else if (sum < target) {
                left++;

            }else {
                right--;
            }
        }
    }
    return result;

}

const arr = [-1,0,1,2,-1,-4];
const target = 0;

 const triplets = threeSumTarget(arr,target);
 console.log("result:",triplets);

