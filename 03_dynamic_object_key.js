//dot notation 
const person = {
    name: "sharko"
}

console.log(person.name)
//          or
console.log(person["name"])
// to add a key

person.age = 22 // added age
person.name = "sarthak" // changes name
console.log(person)

// square bracket notation

const movies = {
    // top-movies : "LastOfUs" // gives error
    "top-movies": ["LastOfUs","Black Adam","Wednesday"] // no error
}

// console.log(movies.top-movies) //NaN
console.log(movies["top-movies"]) 
// to get each item seperately
movies["top-movies"].map((movie)=> console.log(movie)) 


 //explaination ...........................
//  In general, you can use either dot notation or bracket notation to access properties of an object in JavaScript. However, if the property name contains characters that are not valid in a JavaScript identifier (such as hyphens, spaces, or special characters), you must use bracket notation.

// In the case of movies["top-movies"], since the property name contains a hyphen, you must use bracket notation to access it.If you try to use dot notation to access the top - movies property of the movies object like this: movies.top - movies, it will result in a syntax error.

let videoState = 'loading'
videoState = 'error'
const keyName = "laptop"  // key value
const app = {
    [videoState] : true
}

app[keyName] = "apple" // key name
console.log(app)

