const taco = {id:1, name:'chicken', price:20.01, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18.00, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]



// write a function that takes an tacoOBJ and a id
// and returns a new object with name changed to "changed"
let tacoNameChange = (tacoOBJ) => {
    let newTaco = {...tacoOBJ, name: 'CHANGED'}
    return newTaco
}

console.log(tacoNameChange(taco1))




// write a function that takes an tacoOBJ and return some

// formatted html (will be a string technically)

let tacoFormat = (tacoOBJ) => {
    const {id, name, price, about} = tacoOBJ
    return`
    <div>
        <h1>${name}: ${price}</h1>
        <h6>${id}</h6>
        <h3>    ${about}</h3>
    </div>
    `
}

console.log(tacoFormat(taco1))




// write a function that takes an tacoOBJ and return formatted price with
// .00 
const tacoPriceFormat = (tacoOBJ) => {
    const {price} = tacoOBJ

    let tacoPriceChanged = {...tacoOBJ, price: "$ " + price.toFixed(2)}
    return tacoPriceChanged


}
console.log(tacoPriceFormat(taco2))




// create a new array where all of the prices is formatted with .00
let tacosPrice = tacos.map(tacoPriceFormat)

console.log(tacosPrice)


// write a function that takes an array and logs each item in the array
// hint forEach

//It shows up weird because the tacos array is formatted like that
console.log("------")
tacos.forEach(console.log)

// use the find method to return the object with id:1
console.log("------")
console.log(tacos.filter( function(i) {
    return (i.id == 1)
}))


// return a new array with all prices greater than 19
console.log("------")
console.log(tacos.filter( function(i) {
    return (i.price > 1)
}))


// return a new array with a 'about' key where it is a combo of
// name price and about
console.log("------")
const combo = (taco) => {
    let tacoFormat = tacoPriceFormat(taco)

    const {name, about, price} = tacoFormat
 
    let newTacoMenu = {...taco, name: "", price: "", about: (about +' '+ name +' :'+ price)}

    return newTacoMenu
}
let tacosCombo = tacos.map(combo)
console.log(tacosCombo)

///CRUD

// don't change tacos array or change objects

// can hard code data (Don't need to get it from the users)



// READ (array of obj to array of html) 

// Update (update a taco) 

// Remove (delete a taco) 

// Create (add a taco) 



// bonus use reduce to return the sum of prices in tacos array

// bonus do in rails

// bonus create you own