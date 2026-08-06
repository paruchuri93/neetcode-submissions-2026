/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        const dfs = (currSum, node) => {
            if(!node) return false;

            currSum += node.val;
            if(!node.left & !node.right){
                return currSum === targetSum
            }

            return (dfs(currSum, node.left) || dfs(currSum, node.right));

        }

        return dfs(0, root)
    }
}
