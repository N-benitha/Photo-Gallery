# Challenges
This is a directory for challenges that we should solve. They focus on string transformation and array manipulation.

## Array Manipulation - `arrayMap.js`
This program uses sliding window approach and here are the steps:
- Initialization of `start` and `end` pointers to traverse through the array.
- `presentSum` hols the sum of the current subarray.
- Adjustment of the window size by moving `start` and `end` and updating `presentSum` until the target sum is found or the array is exhausted.

**Constraints**
>The array will contain between 1 and 100,000 elements.
>The elements in the array and the target sum will be between -1,000,000,000 and 1,000,000,000.

**Time Complexity**: O(n), where n is the length of the array.
**Space Complexity**: O(1).

## String Transformation - `stringTransform.js`
This program uses the length of the provided string to transform it. Here are steps:
- Check the length of the string and stores it in `len`.
- If `len` is divisible by 15, reverse the string and replace each character with its ASCII code.
- If `len` is divisible by 3, reverse the string.
- If `len` is divisible by 5, replace each character with its ASCII code.
- Otherwise, return the original string.

**Constraints**
>The string will only contain alphanumeric characters and spaces.
>The length of the string will be between 1 and 1000.

**Time Complexity**: O(n), and **Space Complexity**: O(n), where n is the length of the array `len`.