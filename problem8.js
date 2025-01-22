// methods in java script
// forEach function is used to print value but not stored in new arr 
// map methid store value in new arr 


let arr = [1,2,3,4,5,6];
arr.forEach((val) =>{
    console.log(val*val);
})

let newarr = arr.map((val) =>{
    return val*val ;
})

console.log(newarr);