/**
 * 汉诺塔
 */
    let count = 0;
    let hanoi = function (n, a, b, c) {
        if (n === 1) {
            count += 1;
            console.log(count + ' : ' + a + ' -> ' + c);
        } else {
            hanoi(n - 1, a, c, b);
            count += 1;
            console.log(count + ' : ' + a + ' -> ' + c);
            hanoi(n - 1, b, a, c);
        }
    };
    hanoi(4, 'A', 'B', 'C');
