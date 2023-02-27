// It is an array method
// It returns a new array

const info = [
    {
        name:"sharko",
        age:21
    },
    {
        name:"hela",
        age:9000
    }
]

let a = info.map((obj)=>{
    // can get the whole object
    console.log(obj)
    //can access particular key of the object
    console.log(obj.name + " is name")
    //can return 
    // return obj.age//
    return obj.age * 10
})

// if there is singal functionality no need to use curly braces {}
console.log(a)

const newPeople = info.map((items)=>{
    return {
        firstName: items.name.toUpperCase(),
        oldAge: items.age + " is age"
    }
})

console.log(newPeople)