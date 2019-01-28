const assert = require('assert');
/**
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
Example 1:
Input: "Hello"
Output: "hello"
Example 2:
Input: "here"
Output: "here"
Example 3:
Input: "LOVELY"
Output: "lovely"
 */

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    return str.toLowerCase();
};

var toLowerCase2 = function(str){
    return str.split('').map((el) => el.toLowerCase()).join('');
}

var str = 'Hello';
assert.deepStrictEqual(toLowerCase(str), 'hello');
assert.deepStrictEqual(toLowerCase2(str), 'hello');

var str = 'here';
assert.deepStrictEqual(toLowerCase(str), 'here');
assert.deepStrictEqual(toLowerCase2(str), 'here');

var str = 'LOVELY';
assert.deepStrictEqual(toLowerCase(str), 'lovely');
assert.deepStrictEqual(toLowerCase2(str), 'lovely');