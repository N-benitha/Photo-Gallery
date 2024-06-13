function transformString(s) {
    const n = s.length;
    let transformed = '';
    
    if (n % 15 === 0) {
        // Length is divisible by both 3 and 5
        // Step 1: Reverse the string
        s = s.split('').reverse().join('');
        // Step 2: Replace each character with its ASCII code
        for (let i = 0; i < s.length; i++) {
            transformed += s.charCodeAt(i).toString();
        }
    } else if (n % 3 === 0) {
        // Length is divisible by 3
        transformed = s.split('').reverse().join('');
    } else if (n % 5 === 0) {
        // Length is divisible by 5
        for (let i = 0; i < s.length; i++) {
            transformed += s.charCodeAt(i).toString();
        }
    } else {
        // No transformation
        transformed = s;
    }
    
    return transformed;
}

// Example usage:
console.log(transformString("Hello World"));  // Output will depend on the length of the string
console.log(transformString("abcdef"));       // This string length is 6, divisible by 3 -> "fedcba"
console.log(transformString("12345"));        // This string length is 5, divisible by 5 -> "4950515253"
console.log(transformString("abcdefghijklmno"));  // Length is 15, divisible by 15 -> "11111010910810710610510410310210110099"
