class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0;
        let res = 0

        for(let n of nums){
            if(count === 0){
                res = n
            }

            if(res === n){
                count+=1
            } else {
                count -=1
            }
        }

        return res;
    }
}
