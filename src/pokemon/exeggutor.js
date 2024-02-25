import { Pokemon } from "../base/pokemon.js";
import pokemonData from "../../data/pokemon.json" assert { type: "json" };

export class Exeggutor extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.Exeggutor, { level, iv, ev });
  }
}
