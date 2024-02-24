import { Pokemon } from "../base/pokemon.js";
import { pokemonData } from "../../data/pokemon.js";

export class NidoranF extends Pokemon {
  constructor({ level, iv, ev }) {
    super(pokemonData.NidoranF, { level, iv, ev });
  }
}
