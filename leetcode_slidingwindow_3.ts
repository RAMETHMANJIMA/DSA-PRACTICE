// Approach: Sliding Window


// We use two pointers (left and right) to create a sliding window that expands and contracts based on the presence of repeating characters.

// Steps to Solve:
// Use a HashSet (or HashMap) to store characters in the current window.

// Expand the right pointer to add characters until a duplicate is found.

// If a duplicate is found, move the left pointer forward until there are no duplicates.

// Keep track of the maximum length of a unique-character substring.


function lengthOfLongestSubstring(s: string): number {
    let charSet = new Set<string>();
    let left = 0; 
    let maxLength = 0; 

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1); 
    }

    return maxLength; 
}
