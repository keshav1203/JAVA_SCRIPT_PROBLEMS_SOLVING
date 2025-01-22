// asking user to enter a number than with the help of loop storing that number in a array from 1 to n  
// than making a function using method to add all element in array 
// than making a function using method to product all element of array 

let inputno = prompt("enter a number please !");
inputno = Number(inputno);
newarr =[];
i= 1;
while (i<=inputno){
    newarr.push(i);
    i++;
}
sumarr = newarr.reduce((res,curr) =>{
    return res + curr ;
});
console.log(sumarr);

mularr = newarr.reduce((res , curr) => {
    return res*curr ; 
})
console.log(mularr);