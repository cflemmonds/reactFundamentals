const instructors = [
    { name: 'Quincy', specialty: 'Quantum Mechanics', medals: 7 },
    { name: 'Kenn', specialty: 'Norse Mythology', medals: 5 },
    { name: 'Carolyn', specialty: 'Kung Fu', medals: 8 },
    { name: 'Paul', specialty: 'Entomology', medals: 4 },
];

// ? Say we want to iterate over thet array and filter it based on the number of medals each instructor earned. We only want instructors that have 5 or more medals.

/* 
    ? We have to create an empty array to push() the names into as we iterate.
    1. Manage the index
    2. Check the length
    3. Increment
    4. Create an empty array
    5. Etc

*/

let instructor_names = [];

for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].medals >= 5) {
        instructor_names.push(instructors[i].name);
    }
}

console.log(instructor_names);

//? the filter() method makes things more sleek for tasks like iterating a collection and filtering based on a specific property
// Here it is:
const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);

/* 
* a few things to notice:
    * we create a variable called instructorNames to store the results as an array
        * filter() returns a NEW array, not modify the original array.
        * This allows us to safely use filter() without having to worry about the original
    * Call the filter() on the instructors array
    * the instructor parameter in filter() can be called anything
*/

// exact same thing, different parameter name
const instructorNamesTwo = instructors.filter(i => i.medals >= 5);
console.log(instructorNamesTwo);