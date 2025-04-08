function subarraySum(nums: number[], k:number): number {
    let count = 0;
    let sum = 0;
    const prefixSums = new Map<number, number>() ;

    prefixSums.set(0,1);

    for (let num of nums) {
        sum +=num;
    }

    if (prefixSums.has(sum - k)) {
        count += prefixSums.get(sum - k)!; {          
        }
        
    prefixSums.set(sum, (prefixSums.get(sum) || 0) + 1);
    }
    return count;
}