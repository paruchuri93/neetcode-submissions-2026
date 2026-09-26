class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((str) => `:;${str.length}:${str}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;

        while (i < str.length) {
            // 1) verify your marker at current position
            if (str[i] !== ":" || str[i + 1] !== ";") {
                throw new Error("Invalid encoding");
            }

            // 2) read length (can be multiple digits)
            let j = i + 2;
            while (j < str.length && str[j] >= "0" && str[j] <= "9") {
                j++;
            }

            // 3) expect ':' separator after length
            if (j >= str.length || str[j] !== ":") {
                throw new Error("Invalid length separator");
            }

            const len = Number(str.slice(i + 2, j));
            const start = j + 1;
            const end = start + len;

            res.push(str.slice(start, end));
            i = end; // move to next encoded chunk
        }

        return res;
    }
}
