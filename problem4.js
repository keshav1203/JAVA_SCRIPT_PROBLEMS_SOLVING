//We’ve seen that we can use % (the remainder operator) to test whether a number
//is even or odd by using % 2 to see whether it’s divisible by two. Here’s another
//way to define whether a positive whole number is even or odd


const isEven = function(n){
    if (n===0){
     return true;
    }else if (n === 1){
      return false;
    }else if (n>1)
        return isEven(n - 2);
}

console.log(isEven(75))

