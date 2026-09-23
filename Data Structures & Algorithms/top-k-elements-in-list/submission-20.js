class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = {};
        for (let num of nums) freq[num] = (freq[num] || 0) + 1;
        const sortedUniqueNums = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
        return sortedUniqueNums.slice(0, k).map((n) => parseInt(n));
    }
}
