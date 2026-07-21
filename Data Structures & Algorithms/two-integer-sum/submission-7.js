class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexes = {}

        for(let [i, n] of nums.entries()){
            let curr = target - n;
            if(curr in indexes) {
                return [indexes[curr], i];
            }
            else {
                indexes[n] = i;
            }
        }

        return []
    }
}
