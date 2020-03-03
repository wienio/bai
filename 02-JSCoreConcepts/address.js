let title = 'dr';
let name = 'Mateusz';
let surname = 'Kubicki';
let street = 'Długa 15';
let city = 'Kraków';
let zip = '30-781';
let country = 'Poland';

let firstOption = title + ' ' + name + ' ' + surname + '\nul. ' + street + '\n' + zip + ' ' + city + '\n' + country.toUpperCase()
let secondOption = `${title} ${name} ${surname}\nul. ${street}\n${zip} ${city}\n${country.toUpperCase()}`

console.log(firstOption);
console.log(secondOption);
/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/
