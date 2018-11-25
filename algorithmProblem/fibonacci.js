/**
 * 斐波那契数列
 */
function f2(n) {
    let arr = [];
    let n1 = 1;
    let n2 = 1;
    arr.push(n1);
    arr.push(n2);
    let count = 0;
    for (let i = 0; i < n; i++) {
        let n = n1 + n2;
        arr.push(n);
        n1 = n2;
        n2 = n;

        if (n % sum(n) === 0) {
            console.log("::::", count,n, sum(n))
            count++;
            if (count === 11) {
                console.log('ok')
                break;
            }
        }
    }
   // console.log(arr)
}

f2(193)

function sum(num) {
    let arr = num.toString().split('');
  //  console.log(arr);
    let total = 0;
    arr.forEach(element => {
        total += Number(element);
    });
   // console.log(total)
    return total
}



/* function fibonacci(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

for(let i=0; i<10; i++){
    console.log(fibonacci(i))
} */