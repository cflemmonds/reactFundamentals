const instructors = [
    { name: 'Quincy', specialty: 'Quantum Mechanics' },
    { name: 'Kenn', specialty: 'Norse Mythology' },
    { name: 'Carolyn', specialty: 'Kung Fu' },
    { name: 'Paul', specialty: 'Entomology' },
];

// * We want to create a new array containing only the names of the instructors


let instructor_names = []; //  We need to begin with an empty array which will hold our data

instructors.forEach(instructor => {    // we use a for each method on the instructors object to iterate over the object
    instructor_names.push(instructor.name);  // we use the push method on the instructor names object and use dot notation into the instructor object, name property/key
});

console.log(instructor_names);

//? Here is a sleeker version of the previous solution.

//? First we create a variable called instructorNames that stores the result as an array object.
//? Second we are calling the .map() method on the instructors array: instructors.map(...).
//? The instructor paraments in the map() method can be named anything, usually something related to the array. This is shown in the instructorNamesTwo function.

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames)

// Exact same thing, different parameter name
const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNamesTwo);

// Get some practice. Fix the following code 
const instructorInfo = instructors.map(i => i.name, i => i.name.specialty);
console.log(instructorInfo); // Unable to solve

let kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30},
];
console.log(kvArray);

let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
});