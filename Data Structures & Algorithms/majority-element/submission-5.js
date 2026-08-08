class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const count = {}
        let maxCount = 0;
        let res = 0;

        for(let n of nums){
            count[n] = (count[n] || 0)+1
            if(maxCount < count[n]){
                maxCount = count[n]
                res = n
            }
        }

        return res
    }
}
