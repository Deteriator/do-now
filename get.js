//Test for getters and setters
class User {
    constructor(name,email,username){
       this._name = name;
       this._email = email;
       this._username = username;
    }
    get name() {
        return this._name[0].toUpperCase() + this._name.substring(1);
    }
    set name(newName) {
        if(newName.length > 0 ) this._name = newName;
    }
    get email(){
        return this._email.split('@')[0];
    }
    set email(newEmail){
        if(!newEmail.includes('@')) console.log('Invalid');
        else{
            this._email = newEmail;
            console.log(`Email now ${this._email}`);
        }
    }
}