class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles)
        let res = r

        while(l<=r){
            let k = Math.floor((l+r) / 2)
            let total = piles.reduce((acc, val)=>{
                return Math.ceil((val) /k) + acc
            },0);

            if(total > h){
                l = k+1
            } else {
                res = k
                r = k - 1
            }
        }

        return res
    }
}