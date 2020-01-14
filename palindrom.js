const isPalindrome = function (string){
    return string.split("").reverse().join("") === string;
};

const isPalidrNumber = function(number){
       return isPalindrome(String(number));
};
const twice = (value) =>{
    value = value.toString();
    if( value.substr(0,value.length/2) === value.substr(value.length/2)){
        return Number(value);
    }
    else return Number(value) * 2;
};

const headAss = function(word){
    word = word.split("");
    for (let i = 0; i < word.length; i += 1){
        if( i % 2 == 0){
            word[i] = word[i].toUpperCase();
        }
        else{
            word[i] = word[i].toLowerCase();
        }
    }
    return word.join("");
};

const swapName = name => name.split(" ").reverse().join(", ");

const reverseNumber = (number) =>{
   let splitNumber = number.toString().split("");
   let reversedNumber = splitNumber.reverse().join("");
   return Number(reverseNumber);
};

const centerOf = (str) => {
        let start;
        let length;

        if(str.length % 2 == 1) { // returns the center of odd
            start = str.length / 2;
            length = 1;
        } else {
            start = str.length / 2 - 1;//returns center of even
            length = 2;
        }
        return str.substring(start, start + length);
};

const centerOf2 = str => str.length % 2 ? str.substr(str.length / 2, 1) : str.substr((str.length / 2) - 1, 2);

const reverseWords = (str) => {
  str = str.split(' ');
  
  for (let i = 0; i < str.length; i++) {
      if (str[i].length >= 5) {
        str[i] = str[i].split("").reverse().join("");
      }
  }
  return str.join(" ");
};

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
      if (num % i == 0) return false;
  }
  return true;
};
const firstNPrime = (n) =>{
    let arr = [];
    while(arr.length <= n){

    }
    
};

const doubleConsonants = (str) =>{
    let cons = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j',
    'k', 'l', 'm', 'n', 'p', 'q', 'r',
    's', 't', 'v', 'w', 'x', 'z'
];
    let newString = '';
    for (let letter of str) {
        if (cons.indexOf(letter.toLowerCase()) === -1) {
            newString += letter;
        }else{
        newString += letter + letter;
        }
    }
    return newString;
};

const wordAnalysis = (str) =>{
    const wordCount ={
        word: str,
        vowelCount:0,
        consonantCount:0
    };
    const arr= ["a","e","i","o","u"];
    
    for(const letter of str){
        if(arr.includes(letter.toLowerCase())){
            wordCount.vowelCount += 1;
        }
        else{
            wordCount.consonantCount += 1;
        }
    }
    return wordCount;
};

const wordLetters = (str) =>{
    const wordCount ={
        word: str,
        vowelCount: [],
        consonantCount: []
    };
    
    const arr= ["a","e","i","o","u"];
    
    for(const letter of str){
        if(arr.includes(letter.toLowerCase())){
            if(wordCount.vowelCount.includes(letter)){
                continue;
            }
            else{
                wordCount.vowelCount.push(letter);
            }
        }
         else if(wordCount.consonantCount.includes(letter)){
            continue;
        }
        else{
            wordCount.consonantCount.push(letter);
        }
        
    }
    return wordCount;
};
const fellows = ['laisha', 'devonte','emanuel', 'anne'];

fellows.forEach(name =>{
    console.log(name.toUpperCase());
});

const products =  [
  ['Dark Chocolate Crunchies', 4.11, 3],
  ['Peppermint Poppers', 0.88, 1],
  ['Banana Bunches', 2.33, 2]
];

const toObject = function(products) {
    return products.map((currentValue) =>{
        return {
          name: currentValue[0],
          price: currentValue[1],
          quantity: currentValue[2]
    };
    });
};

const headAss2 = str =>{
   str = str.split("");
   let newArr = [];
   str.forEach((currentValue,index) =>{
       console.log(index);
      if(index % 2 == 0){
          newArr.push(currentValue.toLowerCase());
      }
      else{
          newArr.push(currentValue.toUpperCase());
      }
   });
   return newArr.join('');
};
