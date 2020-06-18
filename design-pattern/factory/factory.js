function peopleFactory(name, lastname) {
  let people = {};
  people.name = name;
  people.lastname = lastname;

  function fullName() {
    return `${people.name} ${people.lastname}`;
  }

  people.fullName = fullName;

  return people;
}


let peopleA = peopleFactory('Joao', 'Doe');

console.log({peopleA, fullName: peopleA.fullName() });

