const request = await fetch('https:\\randomuser.me/api/?results=50');

const data = await request.json();

   let emails = data.results.map(user =>{
        return user.email
    })
    
   let names = data.results.map(user =>{
       return `${user.name.title} ${user.name.first} ${user.name.last}`
   })
   
   let thumbnails = data.results.map(user =>{
       return `<img src="${user.picture.thumbnail}">`
   })
   
   let UnitedKindgom = data.results.filter(user =>{
       return user.location.country === "United Kingdom"
   })
   
   let numFemales = data.results.reduce((total,user)=>{
       if(user.gender === 'female') {
           return total + 1;
       } else {
           return total;
       }
   }, 0) 
    console.log((numFemales / data.results.length) * 100 )
    console.log(UnitedKingdom.length)
    
    const makeFriendList = function() {
        const friends = [];
        return {
            addFriend(friend) {
                friends.push(friend);
                return `<<${friend}>> successfully added.`;
            },
            removeFriend(friend){
                if(friends.includes(friend)){
                    friends.splice(friends.indexOf(friend),1)  
                    return `<<${friend}>> successfully removed.`;
                }
                else{
                    return `<<${friend}>> not found.`
                }
                
            },
            displayFriend(){
                console.log(friends);
            }
        }
    }
    
    
    function fridayThe13ths(year) {
      let thirteenths = [];
    
      for (month = 0; month < 12; month += 1) {
        thirteenths.push(new Date(year, month, 13));
      }
      return thirteenths.reduce(function (count, day) {
        return day.getDay() === 5 ? count += 1 : count;
      }, 0);
    }
    
    let count = 0;
    ddfor(let i = 0; i <=12; i++){
      const birthday = new Date(', 1975 23:15:30');
      const date1 = birthday.getDate();
      let day = birthday.getDay()
      if(date1 === 13 && day === 5){
        count += 1;
      }
    }
    return count;
    
function SoftwareEngineer (name,company,favoriteLanguage){
    this.name = name;
    this.company = company;
    this.favoriteLanguage = favoriteLanguage;
}
const markEngineer = new SoftwareEngineer("Mark","Apple","Python")

SoftwareEngineer.prototype.switchCompany = function (newCompany){
    this.company = newCompany;
    return `Now working for ${this.company}`
}
SoftwareEngineer.prototype.program = function(){
    return `Now programming in ${this.favoriteLanguage}`
}

function alphabetPosition(str){
   let arr = "abcdefghijklmnopqrstuvwxyz".split("");
   str = str.replace(/\W/gi, "")
   return str.replace(/[a-z]/ig, function(letter){
       return `${arr.indexOf(letter.toLowerCase()) + 1} `
   });
}

let arrayDiff = (arr1, arr2) => {
  return arr1.filter(item => !arr2.includes(item));  
}

let persistence = (num) =>{
    num = num.toString();
    let count = 0;
    while(num.length > 1){
        num = num.split('')
        .map(Number)
        .reduce((a, b) => a * b)
        .toString(); 
        count++
    }
    return count;
}

function tickets(peopleInLine){
  let [c25,c50,c100] = [0,0,0];
  for(let payed of peopleInLine) {
    if(payed===25) c25++;
    if(payed===50) {c50++; c25--;}
    if(payed===100) {c25--; c50>0?c50--:c25-=2;}
    if(c25<0||c50<0) return 'NO'
  }
  return 'YES'
}

let countDeafRats = (town) => {
  const idx = town.indexOf('P')
  let count = 0;
  const townFirst =  town.slice(0,idx).replace(/\s/g,'')
  const townSec =  town.slice(idx+1).replace(/\s/g,'')
  for(let i = 0; i < townFirst.length; i+=2){
    if(townFirst[i] + townFirst[i+1] == 'O~'){
      count++
    }
  }
  for(let i = 0; i < townSec.length; i+=2){
    if(townSec[i] + townSec[i+1] == '~O'){
      count++
    }
  }
  return count
}
//way for something to be both true and false.
const omnibool = {
  val: false,
  [Symbol.toPrimitive]() {
    this.val = !this.val;
    return this.val;
  }
};

function fizzBuzzFactory (arr){
  return function(n){
    let a = arr.length;
    while( a-- ){
      [x,str] = arr[a];
      if( n%x==0 ) return str;
    }
    return ''+ n
  }
}

function Laptop(type, oS) {
    this.type = type;
    this.oS = oS;
    this.isOn = false;
}
Laptop.prototype.turnOn = function(){
    this.isOn = true;
    return 'Laptop now on.'
}

Laptop.prototype.turnOff = function(){
    this.isOn = false;
    return 'Laptop now off.'
}

let macbook = new Laptop('Macbook Pro','MacOs');

function Employee(name,salary,position){
    this.name = name;
    this.salary = salary;
    this.position = position; 
    this.laptop = new Laptop('16" Macbook Pro','MacOS');
}
Employee.prototype.increaseSalary = function(raise){
    this.salary += raise;
    return `${this.salary} is your new salary`
}

Employee.prototype.doWork = function() {
    this.laptop.turnOn();
    return "Ready to work..."
}

function Executive(name,salary,position,nameOfAssistant){
    Employee.call(this,name,salary,position)
    this.assistant = new Employee(nameOfAssistant,75000,'Executive Assistant');
    
}
Executive.prototype = Object.create(Employee.prototype);
Executive.prototype.constructor = Executive;

