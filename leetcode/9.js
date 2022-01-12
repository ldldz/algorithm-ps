// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
// 숫자를 문자열로 바꿔 뒤집은 후 비교
var isPalindrome = function(x) {
    return x.toString() === x.toString().split('').reverse().join('');
};