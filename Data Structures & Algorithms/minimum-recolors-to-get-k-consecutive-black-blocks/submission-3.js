class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let currOperations = 0;

        for (let i = 0; i < k; i++) {
            if (blocks[i] === "W") {
                currOperations += 1;
            }
        }

        let minOperations = currOperations;
        for (let i = k; i < blocks.length; i++) {
            if (blocks[i] === "W") {
                currOperations += 1;
            }

            if (blocks[i - k] === "W") {
                currOperations -= 1;
            }

            minOperations = Math.min(currOperations, minOperations);
        }

        return minOperations;
    }
}
