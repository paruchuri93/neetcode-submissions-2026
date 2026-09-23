class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        for (let num of nums) count[num] = (count[num] || 0) + 1;
        let freq = new Array(nums.length + 1).fill(0).map(()=>[]);

        for(let key in count){
            let index = count[key]
            freq[index].push(parseInt(key))
        }

        let res = []
        for(let i=freq.length - 1; i>0;i--){
            for(let e of freq[i]){
                res.push(e)

                if(res.length === k){
                    return res
                }
            }
        }

    }
}
