// this is a function that has capability to produce 2 number on its own 
// adding that number in a array
// and also printing the sum of that number 


const adder = function(num){
    numList = [];
   while (numList.length <=1 ){
    no = Math.random() * 10 ;
    no = Math.round(no);
    numList.push(no)
    
   }
   console.log(numList[0] + numList[1]);
    return numList ;
}
const result = adder()
console.log(result);
