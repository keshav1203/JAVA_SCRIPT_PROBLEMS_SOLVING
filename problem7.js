// a function that take string as an arrgument and returns the number of vovels in string

const vovelcounter = function(str){
    let count = 0;
    for(let char of str){
        if(char==="a"||char==="i"||char==="e"||char==="o"||char==="u") {
            count++;
        }
    }
    return count ;
}

let result = vovelcounter("keshav");
console.log(result);