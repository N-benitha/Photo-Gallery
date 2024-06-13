function hasSubarrayWithSum(array, target) {
    let start = 0;
    let presentSum = 0;
    
    for (let end = 0; end < array.length; end++) {
        presentSum += array[end];
        
        while (presentSum > target && start <= end) {
            presentSum -= array[start];
            start++;
        }
        
        if (presentSum === target) {
            return true;
        }
    }
    
    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target1 = 17;
const target2 = 3;
const target3 = 20;
const target4 = 13;
console.log(hasSubarrayWithSum(arr, target1));  // Output: true
console.log(hasSubarrayWithSum(arr, target2));  // Output: false
console.log(hasSubarrayWithSum(arr, target3));  // Output: false
console.log(hasSubarrayWithSum(arr, target4));  // Output: true