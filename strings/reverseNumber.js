/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversedNumber = parseInt(x.toString().split('').reverse().join(''));
    
    if (reversedNumber > Math.pow(2,31) - 1) return 0;
    return Math.sign(x) * reversedNumber;
};