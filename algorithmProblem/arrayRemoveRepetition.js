/**
数组去重，
fn: filter,对象 
fn1: for, 新数组
fn3： set , Arrar.form
*/

var arr = [1, 2, 1, 3, 4, 1, 2, 1]

function fn(arr) {
    let map = {};
    let newArr = arr.filter(function(value, index) {
        if (!map[value]) {
            map[value] = true;
            return value;
        }
    })
    return newArr;
}

console.log(fn(arr))

function fn1(arr) {
    var newArr = []
    for (let i = 0, n = arr.length; i < n; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(fn1(arr))

function fn2(arr) {
    let s = new Set(arr)
    return Array.from(s)
}

console.log(fn2(arr))