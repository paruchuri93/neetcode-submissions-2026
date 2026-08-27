class Solution {
    /**
     * @param {number[]} customers
     * @param {number[]} grumpy
     * @param {number} minutes
     * @return {number}
     */
    maxSatisfied(customers, grumpy, minutes) {
        let baseLineSatisfied = 0;

        for (let i = 0; i < customers.length; i++) {
            if (grumpy[i] === 0) {
                baseLineSatisfied += customers[i];
            }
        }

        let currWindow = 0;
        for (let i = 0; i < minutes; i++) {
            if (grumpy[i] === 1) {
                currWindow += customers[i];
            }
        }

        let maxSatis = currWindow;
        for (let i = minutes; i < customers.length; i++) {
            if (grumpy[i] === 1) {
                currWindow += customers[i];
            }

            if (grumpy[i - minutes] === 1) {
                currWindow -= customers[i - minutes];
            }

            maxSatis = Math.max(currWindow, maxSatis);
        }


        return baseLineSatisfied + maxSatis;
    }
}
