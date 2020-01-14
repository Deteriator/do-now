const randomStat = (name) => {
    let statSheet = {//array to add stats to
          name: "Test",
          strength: 0,
          dexterity: 0,
          constitution: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 0,
          hitpoints: 0
        };

    for(let j in statSheet){//for each item in the object
    let setArray =[]; // empty array to add items
    let stat = 0; // final stat to use
        for(let i = 0;i < 4; i++){//4 rolls for each stat
             setArray.push(Math.floor(Math.random() * 6) + 1);   //push stats into array
        }
    let toRemove = Math.min(...setArray);//find smallest number from array
    setArray.splice(setArray.indexOf( toRemove ), 1);//remove smallest number for array
        for(let i = 0; i < setArray.length; i++){ //add numbers from array to stat
                stat += setArray[i];   
        }
        statSheet[j] = stat; //add stat numbers to each item in object
    }
    statSheet.name = name;//set name based on what was given
    return statSheet;
};
    