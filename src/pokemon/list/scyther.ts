import {
  Pokemon,
  PokemonStatModifiers,
  PokemonState,
} from "../../base/pokemon";
import { PokemonData } from "../../../data/pokemon.data";

export class Scyther extends Pokemon {
  constructor(statModifiers: PokemonStatModifiers, state: PokemonState) {
    super(PokemonData.Scyther, statModifiers, state);
  }
}
