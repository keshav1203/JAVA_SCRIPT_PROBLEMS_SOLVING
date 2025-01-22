// chanding number divisible by 5 by fizz
// changing number divisible by 3 by buzz
//  changing number divisible by both 3 and 5 by fizzbuzz


let num = 0;
while (num <=100){
    num++;
    if (num%3 === 0 && num%5 === 0){
        console.log("fizzbuzz")
    } else if (num%3 === 0) {
        console.log("fizz")
    } else if (num%5 === 0) {
        console.log("buzz")
    } else {
        console.log(num)
    }
}