//amount of times to break chocolate bar into 1 by 1 squares
const breaks =( n, m ) =>{
    const breakAm = (n * m);
    if(breakAm === 0 || isNaN(breakAm)){
        return 0
    }
    return breakAm - 1;
};
// adding up integers and values of strings and getting the difference
const stringNumDiff = (arr) =>{
    let str = []
    let int = []
    arr.forEach(num =>{
        if(typeof(num) === "string"){
           str.push(parseInt(num))
        }
        else{
           int.push(num)
        }
    });
    str = str.reduce((a,b) =>  a + b)
    int = int.reduce((a,b) => a + b)
    return  int - str;
};
//second method for above solution
const stringNumDiff2 = (arr) =>{
    const map = {
        str : 0,
        int : 0
    };
    arr.forEach(num =>{
        if(typeof(num) === "string"){
           map.str += parseInt(num);
        }
        else{
           map.int += num; 
        }
    });
    return map.int - map.str;
};


const  stringNumDiff3 = (mixedArr)  =>{
 return mixedArr.reduce( (acc, cur) => {
   if (typeof(cur) === 'string') {
     return acc - Number(cur)
   } else {
     return acc + Number(cur)
   }
 }, 0);
};