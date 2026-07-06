class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        for (let n of nums) freq[n] = (freq[n] || 0) + 1;
        const sortedFreq = Object.entries(freq);

        sortedFreq.sort((a, b) => b[1] - a[1]);
        return sortedFreq.slice(0, k).map((item) => item[0]);
    };
}