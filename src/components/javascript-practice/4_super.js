/* 

  Read this resource from MDN Docs about the super() method first: 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

*/

// ? The Super keyword is used to access properties on an object literal or     class's [[Prototype]], or invoke a superclass's constructor.

// ? The Super keyword can be used in two ways: as a "function call" (super(..args)), or as a "property lookup" (super.prop and super[expr]).

// * Here we are looking at super as a function call, because we are passing arguments through the BronzeLevelUser subclass

// the super() method calls the parent constructor
class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    };

    // Method 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    };

    // Method 2
    status() {
        console.log(`Current status: ${this.type}`);
    };
};

class TrialUser extends User {
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    };
};

// Instance of User class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

// ? Everything prior to this is the same exact thing we've done in the last few modules. We are adding a different class - a BronzeLevelUser class. This is someone who pays for the lowest level subscription on our site. In this class, lets say we'll take in their cc information (which in the real world, you would allow Stripe to do that).

// super
class BronzeLevelUser extends User {
    // we add the ccinfo property to the user here
    constructor(username, password, ccinfo) {
        // if you are going to use 'this' in your constructor, you must have super that points to the parent constructor
        super(username, password);
        // the 'this' keyword wouldn't work without super
        this.type = 'Bronze User',
        this.ccinfo = ccinfo
    }
    getInfo() {
        console.log(this.username, this.password, this.type, this.ccinfo);
    }
}

let bronzeGuy = new BronzeLevelUser('Bronze Dude', 'bronze1234', 0000111122223333);
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);