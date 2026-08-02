import {
  Pokemon,
  PokemonStatModifiers,
  PokemonState,
} from "../../base/pokemon";
import { PokemonData } from "../../../data/pokemon.data";

export class Abra extends Pokemon {
  constructor(statModifiers: PokemonStatModifiers, state: PokemonState) {
    super(PokemonData.Abra, statModifiers, state);
  }
}
