//Create 3 initial pokemons: Charmander, Bulbasaur and Squirtle
//Print their name

import { Charmander } from "../src/pokemon/charmander.js";
import { Bulbasaur } from "../src/pokemon/bulbasaur.js";
import { Squirtle } from "../src/pokemon/squirtle.js";

const charmander = new Charmander({ level: 1, iv: 0, ev: 0 });
const bulbasaur = new Bulbasaur({ level: 1, iv: 0, ev: 0 });
const squirtle = new Squirtle({ level: 1, iv: 0, ev: 0 });

console.log(charmander.name);
console.log(bulbasaur.name);
console.log(squirtle.name);
