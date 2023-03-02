// reduce
// iterates , callback function
// reduces to a single value - number , array , object
// 1 parameter ("acc") - total of all calculations
// 2 parameter ("curr") - current iteration / value

const humans = [
    { name : "sarthak" , age : 23 , position : "developer" , salary:1000000},
    { name : "sharko" , age : 24 , position: "gamer" ,salary:200000},
    { name : "akshay" , age : 50 , position: " actor" , salary:1000000},
    { name : "Elon Musk" , age : 53 , position: "CEO", salary: 10000000}
    ]

    const dailyTotal = humans.reduce((total, person)=>{
        console.log(total)
        console.log(person.salary)
        total += person.salary
        return total // always return the 1st parameter , if not it doesn't make sense

    }, 0)

    console.log(dailyTotal)