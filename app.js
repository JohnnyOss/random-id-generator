const fs = require('fs');

const genders = ['m', 'f'];
const femaleNames = ['Kasia', 'Basia', 'Justyna', 'Ania', 'Madzia', 'Genowefa', 'Kunegunda', 'Andżelika'];
const maleNames = ['Tadek', 'Staszek', 'Janek', 'Franek', 'Łukasz', 'Pepe', 'Wiktor', 'Alojzy'];
const lastNames = ['Nowak', 'Smith', 'Garcia', 'Rossi', 'Andersson', 'Muller', 'Hansen', 'Papadopoulos'];

const randChoice = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

const people = [];

for (let i = 1; i < 20; i++) {
    let person = {};

    person.gender = randChoice(genders);

    if (person.gender === 'f') {
        person.name = randChoice(femaleNames);
    } else {
        person.name = randChoice(maleNames);
    }

    person.lastname = randChoice(lastNames);

    person.age = Math.floor(Math.random() * 60 + 18 );

    person.email = person.name + '.' + person.lastname + '@gmail.com';

    person.telephoneNumber = Math.floor(Math.random() * 1000000000);

    people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });