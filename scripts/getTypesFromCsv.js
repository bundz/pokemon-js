import fs from "fs";
import { pokemonData } from "../data/pokemon.js";

const buffer = fs.readFileSync("./pokemon.csv");
const txt = buffer.toString();
const lines = txt.split("\n");

const pokemonList = Object.entries(pokemonData);
const result = {};

let i = 0;
for (const line of lines) {
  const pokemonSplit = line.split(",");
  const type1 = pokemonSplit[2];
  const type2 = pokemonSplit[3];

  const pokemon = pokemonList[i];
  console.log(pokemon);
  result[pokemon[0]] = pokemon[1];
  result[pokemon[0]].type1 = type1;
  result[pokemon[0]].type2 = type2;
  i++;
}

fs.writeFileSync("../data/pokemon.json", JSON.stringify(result));
