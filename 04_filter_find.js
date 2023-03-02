// filter - returns a new array , can manipulate the size of new array ( unlike map) , returns based on condition

// find - returns singal instance  , returns first match if not found returns undefined

let arr= [ 1,2,3,4,5,6,76,7,8,4]

let result = arr.filter((obj) =>{
    return obj % 2 == 0
})
console.log(result)

const humans = [
{ name : "sarthak" , age : 23 , position : "developer" },
{ name : "sharko" , age : 24 , position: "gamer"},
{ name : "akshay" , age : 50 , position: " actor"},
{ name : "Elon Musk" , age : 53 , position: "CEO"}
]

const youngster = humans.filter((people) =>{
    // if (people.age < 50)
    // return people["name"]
    //      or
    return people.age < 50
})
console.log(youngster)

const devs = humans.filter((person) => person.position === "developer")
console.log(devs)
 
const ceo = humans.filter((person) => person.position === "CEO")
console.log(ceo)
console.log(ceo[0].age)

//if condition don't match returns empty array
const teacher = humans.filter((person) => person.position === "teacher")
console.log(teacher)

// for array of strings
const professions = ["actor" ,"wrestlers" , "developers" , "engineers" , "businessman"]
let specificPosition = professions.filter((items) => items === "actor")
console.log(specificPosition)


const akshay = humans.find((person) => person.name === "akshay")
// if not found returns undifined
console.log(akshay)
console.log(akshay.age)


const wrestlers = professions.find((item) => item === "wrestlers")
console.log(wrestlers)
