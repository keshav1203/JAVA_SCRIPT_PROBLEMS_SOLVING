// an array was given 
// filtering out all the numbers greater than 90 using filter method 

studentList = [20,60,77,99,56,98,78,93,98,53,85];
let filter_no = studentList.filter((val) =>{
    return val>=90;
})
console.log(filter_no);