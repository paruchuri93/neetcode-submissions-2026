class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let l = 0;
        let j = 0;
        const res = [];

        while(l < word1.length && j < word2.length){
            res.push(word1[l], word2[j]);
            l+=1;
            j+=1;
        }
        res.push(word1.slice(l));
        res.push(word2.slice(j));
        return res.join("");
    }
}
