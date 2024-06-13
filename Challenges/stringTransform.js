function stringTransform(s) {
    const len = s.length;
    let transformed = '';
    
    if (len % 15 === 0) {
        // Length is divisible by both 3 and 5
        // Step 1: Reverse the string
        s = s.split('').reverse().join('');
        // Step 2: Replace each character with its ASCII code
        for (let i = 0; i < len; i++) {
            transformed += s.charCodeAt(i).toString();
        }
    } else if (len % 3 === 0) {
        // Length is divisible by 3
        transformed = s.split('').reverse().join('');
    } else if (len % 5 === 0) {
        // Length is divisible by 5
        for (let i = 0; i < len; i++) {
            transformed += s.charCodeAt(i).toString();
        }
    } else {
        // No transformation
        transformed = s;
    }
    
    return transformed;
}

// Example usage:
console.log(stringTransform("Code of Africa"));  // Output: Code of Africa
console.log(stringTransform("school"));          // Output: loohcs
console.log(stringTransform("12345"));           // Output: 4950515253
console.log(stringTransform("abcdefghijklmno")); // Output: 111110109108107106105104103102101100999897
console.log(stringTransform("Hamburger"));       // Output: regrubmaH
console.log(stringTransform("Pizza"));           // Output: 8010512212297
console.log(stringTransform("Chocolate Chip Cookie")); // Output: eikooC pihC etalocohC
