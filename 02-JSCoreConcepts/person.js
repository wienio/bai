class Person {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    printFullName() {
        return this.name + ' ' + this.surname.toUpperCase()
    }

    printInitials() {
        return this.name.charAt(0) + '.' + this.surname.charAt(0) + '.'
    }
}

let janNowak = new Person('Jan', 'Nowak')
let me = new Person('Kamil', 'Wieniecki')

console.log(janNowak.printFullName(), janNowak.printInitials())
console.log(me.printFullName(), me.printInitials())