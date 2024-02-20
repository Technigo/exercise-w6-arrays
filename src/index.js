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
  "Pidgey",
];

// print out, in a sentence, how many pokemons I have.
// like: "I have x pokemons!"

const countThem = (pokemonsCount) => {
  console.log(`I have ${pokemonsCount.length} pokemons!`);
};

countThem(pokemons);

//--------------------------------------------------------------------------------

const orderThem = () => {
  console.log(pokemons.sort());
};

orderThem(pokemons);

//--------------------------------------------------------------------------------

const flipThem = () => {
  console.log(pokemons.reverse());
  // reverse the order of the pokemons
};

flipThem(pokemons);

//--------------------------------------------------------------------------------
//KOLLA PÅ DENNA SENARE - OKLART HUR DEN FUNK

const makeThemBig = (hej) => {
  hej.forEach((hej) => {
    console.log(hej.toUpperCase());
  });
  // print the pokemons in UPPERCASE letters
};

makeThemBig(pokemons);

//--------------------------------------------------------------------------------

const onlyTheBs = () => {
  const bPokemons = pokemons.filter((pokemon) => pokemon.startsWith("B"));
  // bPokemons.forEach((pokemon) => {
  console.log(bPokemons);
};
// Call the function to print only Pokémon names starting with 'B'
onlyTheBs();

//--------------------------------------------------------------------------------

const notTheCs = () => {
  // remove all pokemons that starts with C
  const notCPokemons = pokemons.filter((pokemon) => !pokemon.startsWith("C"));
  console.log(notCPokemons);
};

// Call the function to print only Pokémon names not starting with 'C'
notTheCs();

//--------------------------------------------------------------------------------

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle

  pokemons.forEach((pokemon, index) => {
    console.log(`number ${index} - ${pokemon}`);
  });
};

nameAndIdThanks();

//--------------------------------------------------------------------------------

const catchPokemon = (name) => {
  pokemons.push(name);
  console.log("Favourite pokemons", pokemons);
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
};

catchPokemon("Emma Stone");

//--------------------------------------------------------------------------------

const didICatchIt = (name) => {
  console.log(pokemons.includes(name));
  // check the pokemons to see if a specific pokemon is in the array
};

didICatchIt("Weedle");

//--------------------------------------------------------------------------------

const addInThirdPlace = () => {
  pokemons.splice(2, 0, "Clefairy");
  console.log(pokemons);
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
};

addInThirdPlace();

//--------------------------------------------------------------------------------

// // ***BONUS***
const theLongestName = () => {
  //   // find the pokemon with the longest name
  let longestPokemon = "";

  for (const pokemon of pokemons) {
    if (pokemon.length > longestPokemon.length) {
      longestPokemon = pokemon;
    }
  }

  return longestPokemon;
};

console.log(theLongestName()); // Output: Charmander
