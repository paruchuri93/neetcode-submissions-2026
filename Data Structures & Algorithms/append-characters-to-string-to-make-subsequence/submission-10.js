class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        // 1. Build the Directory (Map of Arrays)
        const map = new Map();
        for (let i = 0; i < s.length; i++) {
            if (!map.has(s[i])) {
                map.set(s[i], []);
            }
            map.get(s[i]).push(i);
        }

        let lastFoundIndex = -1; // Tracks our physical position in string 's'
        let matchedCount = 0;

        // 2. Trace 't' through the Directory
        for (let j = 0; j < t.length; j++) {
            const char = t[j];

            // If the character isn't in 's' at all, we are trapped.
            if (!map.has(char)) {
                break;
            }

            const indices = map.get(char);
            let foundValidIndex = false;

            // 3. The Order Enforcer: Find the first index that occurs AFTER our current position
            for (let idx of indices) {
                if (idx > lastFoundIndex) {
                    lastFoundIndex = idx; // Move our position forward
                    foundValidIndex = true;
                    break;
                }
            }

            // If the character exists, but only BEHIND our current position (time travel), we are trapped.
            if (!foundValidIndex) {
                break;
            }

            matchedCount++;
        }

        // Return the total length minus what we successfully matched
        return t.length - matchedCount;
    }
}
