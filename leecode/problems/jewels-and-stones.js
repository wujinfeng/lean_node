const assert = require('assert');
/**
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    let count = 0;
    for (let j = 0, m = J.length; j < m; j++) {
        for (let i = 0, n = S.length; i < n; i++) {
            if (J[j] === S[i]) {
                count += 1;
            }
        }
    }
    return count;
};


var numJewelsInStones2 = function (J, S) {
    return S.split('').filter((s) => J.indexOf(s) > -1).length;
};
/**
 * test
 */
var J = "aA";
var S = "aAAbbbb";
var num = numJewelsInStones(J, S);
var num2 = numJewelsInStones2(J, S);
assert.deepStrictEqual(num, 3);
assert.deepStrictEqual(num2, 3);

var J = "z";
var S = "ZZZ";
var num = numJewelsInStones(J, S);
var num2 = numJewelsInStones(J, S);
assert.deepStrictEqual(num2, 0);