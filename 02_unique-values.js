const menu = [
    {
        name: "pancake",
        category: 'breakfast'
    },
    {
        name: "dal-chawal",
        category: 'lunch'
    },
    {
        name: "egg-curry",
        category: 'dinner'
    },
    {
        name: "milkshake",
        category: 'dinner'
    },
    {
        name: "roti",
        category: 'breakfast'
    },
    {
        name: "egg-roll",
        category: 'lunch'
    },
    {
        name: "chicken",
        category: 'dinner'
    },
    {
        name: "khichidi",
        category: 'dinner'
    },
]

// to get all category

const categories = menu.map((items) => items.category)
console.log(categories)

// to get only the unique values we need to use Set datastrustue
const unique_categories = new Set( menu.map((items) => items.category))
console.log(unique_categories)

// but this is an object ,we need to convert it into array
const _categories = [...new Set( menu.map((items) => items.category))]
console.log(_categories)

// to add other items in array
const o_categories = ['all',...new Set( menu.map((items) => items.category))]
console.log(o_categories)

