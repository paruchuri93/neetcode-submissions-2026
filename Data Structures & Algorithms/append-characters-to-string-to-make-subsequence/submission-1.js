class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let i = 0;
        let j = 0;

        while (i < s.length && j < t.length){
            if(s[i]=== t[j]){
                i+=1;
                j+=1;
            } else{
                i+=1;
            }
        }
        return t.length - j
    }
}
