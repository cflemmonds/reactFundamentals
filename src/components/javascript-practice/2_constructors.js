class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

let userOne = new User("Paul", "O'Conner", "poconnor@elevenfifty.org");
console.log(userOne.first); // undefined
console.log(userOne.f); // Paul
console.log(userOne.l); // O'Connor
console.log(userOne); // User {f: "Paul", l: "O'Connor", email: "poconnor@elevenfifty.org"}

/*  Breakdown of the code */

// we name the class
class User {
    // we call the constructor function and create parameter
    // these will be values that we want to be passed in and stored in the object 
    constructor(first, last, e) {
        // on the right side of the below expressions, the word 'first', 'last', and 'e' are the values that are getting passed in as the arguments when the objects is created
        this.f = first;
        this.l = last;
        this.email = e;
        // on the left side, we have the actual keys of the object being created. the left side stores the incoming arguments from the newly created object as the value for 'this' specific object being created
    }
}