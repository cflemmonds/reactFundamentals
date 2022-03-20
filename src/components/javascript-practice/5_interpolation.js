// Examples of string interpolation

const username = 'Kenn';
console.log(`${username} is the true JS Wizard!`);

//? This example is called a template literals, which breaks things into more than one line
console.log(`Hey students,
What bugs can
${username}
fix
for you today?`);

const person = {
    username: 'Kenn',
    profession: 'Secret Agent'
};

console.log(`${person.username}, ${person.profession}, extraordinaire`); // Kenn, Secret Agent, extraordinaire

