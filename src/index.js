const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  console.log(`I have ${pokemons.length} pokemons!`)
};

countThem()
console.log(`this is my first ${pokemons.at(0)} pokemons`)
console.log(`this is my favorite ${pokemons.at(-1)} pokemons`)

const orderThem = () => {
  // order the pokemons alphabetically
  //console.log(pokemons.sort())
};

// orderThem()

const flipThem = () => {
  // reverse the order of the pokemons
  //console.log(pokemons.reverse())
};

// flipThem()


const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  // console.log(pokemons.map(item => item.toUpperCase()))
};

// makeThemBig()

const onlyTheBs = () => {
  // only print the pokemons that starts with B
  // console.log(pokemons.filter(item => item.startsWith("B")))
  // console.log(pokemons.filter(item => item.charAt(0) === "B"))
  // console.log(pokemons.filter(item => item.substring(0, 1) === "B"))
};

// onlyTheBs()


const notTheCs = () => {
  // remove all pokemons that starts with C
  // console.log(pokemons.filter(item => !item.startsWith("C")))
};

// notTheCs()

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle

  // Use forEach to iterate over the pokemons array
  // pokemons.forEach((pokemon, index) => {
  //   console.log(`Number ${index + 1} - ${pokemon}`) // Print in the format: number x - PokémonName
  // })
};

// nameAndIdThanks()

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push("XingBa")
  console.log(pokemons)
  console.log(`Now I have ${pokemons.length} pokemons!`)
};

catchPokemon()


const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
  // use includes() method, which checks if an array contains a specified element and returns true or false
  // if (pokemons.includes(name)) {
  //   console.log (`${name} is catched!`)
  // } else {
  //   console.log (`${name} is not catched!`)
  // }  
  // Using indexOf() *********************
   if (pokemons.indexOf(name) !== -1) {
    console.log (`${name} is catched!`)
  } else {
    console.log (`${name} is not catched!`)
  }  
};

didICatchIt("Bua")
didICatchIt("XingBa")

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
  pokemons.splice(2,0,"Clefairy")
  console.log(pokemons)
  console.log(`Now I have ${pokemons.length} pokemons!`)
};

addInThirdPlace()

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
  let longestName = ""
  pokemons.forEach(pokemon => {
    if (pokemon.length > longestName.length) {
      longestName = pokemon
    }
  })
  console.log(`This pokemon has the longest name: ${longestName}`)
};

theLongestName()