//Get the pokemon from the previous exercise
//Create a PokemonTrainer and add this pokemon to the trainer
//Print the pokemon trainer name
//Print the pokemon trainer party size

import { Bulbasaur } from "../src/pokemon/bulbasaur.js";
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

const bulbasaur = new Bulbasaur({ level: 5, iv, ev });
const jubileu = new PokemonTrainer({ name: "Jubileu", party: [], money: 0 });

jubileu.addPokemon(bulbasaur);

console.log(jubileu.name);
console.log(jubileu.party.length);
