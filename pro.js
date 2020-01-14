const missingNumber = (numArr) =>{
    let total = 0;
    for(let i = Math.min(...numArr); i <= Math.max(...numArr); i++){
        total += i;
    }
    let actual = numArr.reduce((a,b) =>{
        return a + b;
    });
    return total - actual;
};
//take array of nums, find real total of array, find actual, subtract actual from total return difference