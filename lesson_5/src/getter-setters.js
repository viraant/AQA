const person = {
    firstName: 'Olena',
    lastName: 'Koval',
    _age: 25,

    address: {
        _city: 'Kyiv',

        get city() {
            return this._city;
        },

        set city(value) {
            if (value.length > 0) {
                this._city = value;
            } else {
                console.log("city can't be empty");
            }
        }
    },

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    },

    get age() {
        return this._age;
    },

    set age(value) {
        if (value > 0) {
            this._age = value;
        } else {
            console.log('Incorrect age value');
        }
    },

    getSummary() {
        return `${this.fullName} is ${this.age} and lives in ${this.address.city}.`;
    }
};

person.fullName = 'Ira Shevchenko';
person.age = 26;
person.address.city = 'Lviv';
console.log(person.getSummary());
