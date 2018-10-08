/* 回文十进制
 十进制转二进制
 十进制转八进制
 一个数字是十进制是回文，转为二进制还是回文，转为八进制仍然是回文
*/
class PalinDrome {
    constructor(number) {
        this.number = number;
    }

    isPalindrome() {
        let s1 = this.number.toString(); 
        let binary = this.toBinary();
        let octal = this.toOctal(); 
        return s1 === s1.split('').reverse().join('') && binary.join('') === binary.reverse().join('') && octal.join('') === octal.reverse().join('')
    }

    change(n) {
        let shang = Math.floor(this.number / n);
        let yu = this.number % n;
        let yuArr = [];
        yuArr.push(yu.toString());
        while (shang !== 0) {
            yu = shang % n;
            shang = Math.floor(shang / n);
            yuArr.push(yu.toString());
        }
        return yuArr.reverse()
    }

    toBinary() {
        return this.change(2)
    }

    toOctal() {
        return this.change(8)
    }
}
let i = 11;
while(true){
    let p = new PalinDrome(i);
    let is = p.isPalindrome()
    if(is){
        console.log(i);
        console.log(p.toBinary() ); 
        console.log(p.toOctal());
        break;
    }
    i++;
}
