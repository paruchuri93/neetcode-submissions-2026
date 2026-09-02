class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    numKLenSubstrNoRepeats(s, k) {
        let curr = 0;
        let window = new Set();
        let left = 0;

        for(let i=0; i< s.length; i++){
            while(window.has(s[i])){
                window.delete(s[left]);
                left++;
            }

            window.add(s[i]);
            if(window.size > k){
                window.delete(s[left]);
                left++;
            }
            if(window.size === k){
                curr++;
            }
        }

        return curr;
    }
}