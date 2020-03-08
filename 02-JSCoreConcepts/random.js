let array = []
let max = 20
let min = 5

const fillArray = () => {
    for (let i = 0; i < 10; ++i) {
        array.push(Math.floor(Math.random() * (max - min + 1) + min))
    }
}

const printArray = () => {
    console.log(array.toString())
}

fillArray()
printArray()