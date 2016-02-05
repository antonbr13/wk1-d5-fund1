//Once you complete a problem, open up Chrome and check the answer in the console.



//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here ( ADDED .toLowerCase() )

  var name = 'Tyler';


  function isTyler(name) {
     if (name.toLowerCase() === 'tyler') {
        return true;
     }
     else {
        return false;
     }
  }

  isTyler('TYler'); // -> true
  isTyler(name); // -> true
  isTyler('anton'); // -> false



//Next problem____________
//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


//Code Here (ADDED A TON OF TESTS)

function getName() {
   var userName = prompt('What is your name?');
   return userName;
}


var friends = ['hey',55, 'da', getName()];
var obj = {
   name : getName(),
   age : 25
};

var sentence = "My name is " + getName() + " and I am " + obj.age;

console.log(friends);    // p-> bob     // -> ["hey", 55, "da", "bob"]

console.log(obj);        // p-> john    // -> Object {name: "john", age: 25}

console.log(sentence);   // p-> hellen  // -> My name is hellen and I am 25

console.log(getName());  // p-> anton   // -> anton



//Next problem____________
//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function getName() {
   var userName = prompt('What is your name?');
   return userName;
}

  //Code Here ( ^ getName() from above )

function welcome() {
   var name = getName();
   alert("Welcome, " + name);
}

welcome();






//Next problem____________
//What is the difference between arguments and parameters?

  //Answer Here

   // Parameters -- go between the parenthesis after the function name and act as a functions local place holder. If there are multiple parameters within the parenthesis they must be separated by commas. Used in declaring/setting up the function.
   // Parameters are variables.

   // Arguments -- when invoking/calling the function name outside of the function - arguments are also within parenthesis and separated by commas as well. The values that will be asigned to the parameters upon invocation.
   // Arguments are values
   // Invoking a function is an expression




//Next problem____________
//What are all the falsy values in JavaScript and how do you check if something is falsy?

  //Answer Here



        /*
         undefined
         null
         NaN
         false
         "" (empty string)
         0 (zero)
        */





//Next problem____________
//Create a function called myName that returns your name

  //Code Here

function myName() {
   return 'anton';
}

//Now save the function definition of myName into a new variable called newMyName

  //Code Here

var myNewName = myName();


//Now alert the result of invoking newMyName

alert(myNewName);


//Next problem____________
//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

function outerFn() {
   return function() {
      return 'anton';
   };
}

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

var innerFn = outerFn();


//Now invoke innerFn.

innerFn();
