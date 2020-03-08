names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names
    }

    startWith(letter) {
        return new Students(names.filter(name => name.startsWith(letter)))
    }

    sort() {
        return new Students(names.sort())
    }

    get() {
        return new Students(names)
    }

    getFirst(n) {
        let students = []
        names.forEach((element, index) => {
            if (index < n) { students.push(element) }
        });
        return new Students(students)
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());
