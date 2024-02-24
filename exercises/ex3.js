//Create a Pokemon Trainer
//Create 7 Pokemons
//Add them to the Trainer
//Print the party as follows:
//Party
//Burbasaur - Lv. 5 - Grass, Poison
//Charmander - Lv. 5 - Fire
//Magikarp - Lv. 1 - Water
//Mew - Lv. 40 - Psychic
//Mewtwo - Lv. 80 - Psychic
//Hitmonchan - Lv. 40 - Fighting

//Then print the number of pokemons in the pc


import { Bulbasaur } from "../src/pokemon/bulbasaur.js";
import { Charmander } from "../src/pokemon/charmander.js";
import { Magikarp } from "../src/pokemon/magikarp.js";
import { Mew } from "../src/pokemon/mew.js";
import { Mewtwo } from "../src/pokemon/mewtwo.js";
import { Hitmonchan } from "../src/pokemon/hitmonchan.js";
import { Abra } from "../src/pokemon/abra.js";
import { PokemonTrainer } from "../src/base/pokemonTrainer.js";

const iv = {
  hp: 15,
  attack: 10,
  def: 12,
  special: 14,
  speed: 10,
};

const ev = {
  hp: 0,
  attack: 0,
  def: 0,
  special: 0,
  speed: 0,
};


const jubileu = new PokemonTrainer({ name: "Jubileu", party: [], money: 0 });
const bulbasaur = new Bulbasaur({ level: 5, iv, ev });
const charmander = new Charmander({ level: 5, iv, ev });
const magikarp = new Magikarp({ level: 1, iv, ev });
const mew = new Mew({ level: 40, iv, ev });
const mewtwo = new Mewtwo({ level: 80, iv, ev });
const hitmonchan = new Hitmonchan({ level: 40, iv, ev });
const abra = new Abra({ level: 15, iv, ev });

jubileu.addPokemon(bulbasaur);
jubileu.addPokemon(charmander);
jubileu.addPokemon(magikarp);
jubileu.addPokemon(mew);
jubileu.addPokemon(mewtwo);
jubileu.addPokemon(hitmonchan);
jubileu.addPokemon(abra);

console.log(`Party
${bulbasaur.name} - Lv. ${bulbasaur.level} - Grass, Poison
${charmander.name} - Lv. ${charmander.level} - Fire
${magikarp.name} - Lv. ${magikarp.level} - Water
${mew.name} - Lv. ${mew.level} - Psychic
${mewtwo.name} - Lv. ${mewtwo.level} - Psychic
${hitmonchan.name} - Lv. ${hitmonchan.level} - Fighting`);
console.log(jubileu);
//jubileu.pc = PC{};
//jubileu.printBox() = is not a function;
//jubileu.party.length = 6;
//jubileu.pc.length = undefined;