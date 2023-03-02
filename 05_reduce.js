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

    // console.log(dailyTotal)


    const cart = [
        {
            title: "samsung galaxy s22ultra pro max" ,
            price: 1000,
            amount : 1
        },
        {
            title: "Iphone 14 pro" ,
            price: 1500,
            amount : 2
        },
        {
            title: "Redmi k20 pro " ,
            price: 500,
            amount : 3
        },
        
        {
            title: "Google pixel " ,
            price: 900,
            amount : 4
        },
    ]

    let {totalItems,cartTotal} = cart.reduce((total, mob)=>{
        const {amount,price} = mob
        //count item
        total.totalItems += amount
        //count sum
        total.cartTotal += amount * price
        return total
    },
    //we are returning an object
     {
        totalItems : 0,  
        cartTotal: 0
    })

    // console.log(totalAmountOfCart)

    console.log(totalItems,cartTotal)

    const url ="https://api.github.com/users/john-smilga/repos?per_page=100"
    const fetchRepos = async () => {
        const response = await fetch(url)
        const data = await response.json()
        const newData = data.reduce((total,repo)=>{
            return total
        },{})
    }
    cosno

    fetchRepos()