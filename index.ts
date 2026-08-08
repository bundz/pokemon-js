import { PokemonData } from "./data/pokemon.data";
import { EvolutionStone, EvolutionType, Pokemon } from "./src/base/pokemon";
import { Teleport } from "./src/moves/teleport";

let pokemon: Pokemon = new Pokemon(
  PokemonData.Abra,
  {
    iv: { hp: 15, attack: 15, def: 15, special: 15, speed: 15 },
    ev: { hp: 0, attack: 0, def: 0, special: 0, speed: 0 },
  },
  { currentHp: 10, level: 1, exp: 0, moves: [new Teleport()] },
);

for (let i = 0; i < 800; i += 100) {
  const result = pokemon.gainExp(i);
  console.log(`Exp = ${i}`);
  console.log(`Level = ${pokemon.level}`);
  console.log(`Name = ${pokemon.name}\n`);

  if (result.canEvolve) {
    console.log("Evolving");
    pokemon.evolve(EvolutionType.Level);
  }
}

console.log("Trading...");
pokemon.evolve(EvolutionType.Trade);
console.log(`Level = ${pokemon.level}`);
console.log(`Name = ${pokemon.name}\n`);
