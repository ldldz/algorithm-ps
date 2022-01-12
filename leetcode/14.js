// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
// 0번째와 1번째 문자열의 접두사를 구한 후 구한 접두사와 새로운 문자열의 접두사를 구하는 과정을 반복 -> 모든 문자열의 공통된 접두사가 출력

// 두 문자열을 받아 공통 접두사를 출력하는 함수
function getCommonPrefix(strA, strB) {
    const [arrA, arrB] = [strA.split(''), strB.split('')];
    const length = Math.min(arrA.length, arrB.length);
    let result = '';
    for(let i = 0; i < length; i++) {
        if (arrA[i] === arrB[i]) result += arrA[i];
        else return result;
    }
    return result;
}
var longestCommonPrefix = function(strs) {
    return strs.reduce((pre, cur) => {
        return getCommonPrefix(pre, cur);
    });
};