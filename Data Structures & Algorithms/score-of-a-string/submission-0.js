class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(str) {
        let score = 0;

        if (!str.length) return score;

        for (let i = 0; i < str.length - 1; i++) {
            let current = str[i].charCodeAt(0);
            let next = str[i + 1].charCodeAt(0);

            score += Math.abs(next - current);
        }

        return score;
    }
}
