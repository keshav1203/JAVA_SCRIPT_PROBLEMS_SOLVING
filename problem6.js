// this is a function that is used to ask the user some value 
// the function is adding that value in a array here numList
// we can also add the number if we want 

const adder = function(num){
    numList = [];
   while (numList.length <= 1){
     no = prompt("enter number");
    no = Number(no)
    numList.push(no);
    console.log(no);
   }
    return numList
}
let result = adder();
console.log(result)