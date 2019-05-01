export class Users {
    _id: string;
    email: string;
    password: string;
    name: string;
    birthday: string;

    constructor( _id='', email= '', password= '', name='', birthday = ''){
        this._id = _id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.birthday = birthday;

    }
}
