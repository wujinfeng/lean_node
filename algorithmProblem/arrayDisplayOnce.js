/**
Array返回只出现一次的元素
*/
let arr = [1, 2, 1, 3, 4, 1, 2, 1];

function fn(arr) {
    let newArr = [];
    for (let i = 0, n = arr.length; i < n; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(fn(arr))