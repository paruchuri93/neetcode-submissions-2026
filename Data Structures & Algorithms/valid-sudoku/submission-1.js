class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map()
        const cols = new Map()
        const squares = new Map()

        for(let r = 0; r<9; r++){
            for(let c=0; c<9; c++){
                
                if (board[r][c] === '.') continue;
                let squaresKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;

                if(!rows.has(r)) rows.set(r, new Set())
                if(!cols.has(c)) cols.set(c, new Set())
                if(!squares.has(squaresKey)) squares.set(squaresKey, new Set())

                if(rows.get(r) && rows.get(r).has(board[r][c]) ||
                    cols.get(c) && cols.get(c).has(board[r][c]) ||
                    squares.get(squaresKey) && squares.get(squaresKey).has(board[r][c])
                ) return false

                rows.get(r).add(board[r][c])
                cols.get(c).add(board[r][c])
                squares.get(squaresKey).add(board[r][c])
            }
        }

        return true
    }
}
