// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

/**
 * @param {number} x
 * @return {number}
 */
// Math.sign() 인자의 부호를 반환
// Math.abs() 인자의 절대값을 반환
// 숫자->문자열->배열->뒤집기->문자열 로 숫자를 뒤집고 주어진 범위를 확인한 후 출력
var reverse = function(x) {
    let answer = Math.sign(x) * Math.abs(x).toString().split('').reverse().join('');
    if (answer < (-2)**31 || answer > 2**31 - 1) return 0;
    return answer;
};
