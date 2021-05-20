//Exercise 1

console.log("EXERCISE 1:");

//Function:
function findByValue(objectArray, key, value) {
  let result = objectArray.find(key => key.color === value);
  console.log(result);
  return result;
}

//Test Object and Function call
let cars = [
  {
    color: "purple",
    type: "minivan",
    year: 2019,
    capacity: 7
  },
  {
    color: "red",
    type: "station wagon",
    year: 2010,
    capacity: 5
  },
  {
    color: "blue",
    type: "sedan",
    year: 2001,
    capacity: 5
  }
];

findByValue(cars, "color", "red");

//Exercise 2
console.log("EXERCISE 2:");
//Function that checks if Object has a child object or not
//If Object has no child object, a child object is added
function checkForChildObject(object) {
  numChildObjects = 0;
  for (let val in object) {
    if (isObject(object[val])) {
      numChildObjects++;
    }
  }
  if (numChildObjects === 0) {
    object["NewObject"] = { key1: "value1" };
    return object.NewObject;
  }
}

//function to check if an element is an object or not
const isObject = function (input) {
  if (input === null) {
    return false;
  } else if (typeof input === "object") {
    return true;
  } else {
    return false;
  }
};

// an object with a child for testing
const parentObject = {
  name: "John",
  age: "21",
  address: {
    city: "melbourne",
    country: "australia"
  }
};

//an object without a child object for testing
const noChild = {
  name: "chris",
  age: 22,
  address: "uknown"
};

//Testing Function on Object that has a child, no object is added
checkForChildObject(parentObject);

//Testing Function on an Object that has no child Object, an object is added
checkForChildObject(noChild);
console.log("Child object 'NewObject' added: ", noChild);

//Exercise 3 Write an async function...

// I'm halfway tempted to stay up all night and go over aysnc functions and Promises so I can do this
// But I'll be honest, I've done one codeacademy exercise on them and don't know much about them

//Exercise 4 Convert the following graphic into HTML...
//I know this isn't perfect, I definitley could have stayed up tweaking it
//I thought it would be more honest to submit what I could do in a reasonable time
//Open index.html to view

//Exercise 5
// Describe your approach to testing mobile responsiveness. Include any applicable tools:

//  The first and quikest approach I use, outside of simply changing the browser window size, is
//  to right-click, inspect, and use the 'toggle device toolbar' which allows you to make the view
//  to any size.  After using that inital tool and making adjustments, a professional responsiveness
//  tool like an emulator or a responsinator can be used to see how the application will look on
//  specific devices.  After making changes, I would be sure thoroughly test it on several different
//  views using these tools.
