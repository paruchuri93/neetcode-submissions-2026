class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }

        const charString = new Array(26).fill(0);

        for(let i=0; i< s.length; i++){
            charString[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            charString[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }
        
        return charString.every(val=>val===0)
    }
}
