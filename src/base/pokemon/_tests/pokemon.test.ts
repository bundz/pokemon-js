import { expect } from "chai";
import { PokemonData } from "../../../../data/pokemon.data";
import { Tackle } from "../../../moves/tackle";
import { Thunderbolt } from "../../../moves/thunderbolt";
import { Pokemon } from "../pokemon";
import { EvolutionStone, EvolutionType, PokemonType } from "../pokemon.type";

describe("Pokemon", () => {
  let pokemon: Pokemon;
  beforeEach(() => {
    pokemon = new Pokemon(
      PokemonData.Pikachu,
      {
        iv: { attack: 8, def: 13, speed: 5, special: 9, hp: 7 },
        ev: {
          attack: 23140,
          def: 17280,
          speed: 24795,
          special: 19625,
          hp: 22850,
        },
      },
      {
        level: 81,
        exp: 531441,
        moves: [new Thunderbolt(), new Tackle()],
        currentHp: 100,
      },
    );
  });

  describe("get number", () => {
    it("should return 25", () => {
      expect(pokemon.number).to.be.equals(25);
    });
  });

  describe("get name", () => {
    it("should return Pikachu", () => {
      expect(pokemon.name).to.be.equals("Pikachu");
    });
  });

  describe("get type1", () => {
    it("should return Electric", () => {
      expect(pokemon.type1).to.be.equals(PokemonType.Electric);
    });
  });

  describe("get type2", () => {
    it("should return null", () => {
      expect(pokemon.type2).to.be.equals(null);
    });
  });

  describe("get currentHp", () => {
    it("should return 100", () => {
      expect(pokemon.currentHp).to.be.equals(100);
    });
  });

  describe("get level", () => {
    it("should return 81", () => {
      expect(pokemon.level).to.be.equals(81);
    });
  });

  describe("get moves", () => {
    it("should return moves", () => {
      expect(pokemon.moves).to.have.lengthOf(2);
      expect(pokemon.moves[0]).to.deep.equals(new Thunderbolt());
      expect(pokemon.moves[1]).to.deep.equals(new Tackle());
    });
  });

  describe("get baseHp", () => {
    it("should return baseHp", () => {
      expect(pokemon.baseHp).to.be.equals(PokemonData.Pikachu.baseStats.hp);
    });
  });

  describe("get baseAttack", () => {
    it("should return baseAttack", () => {
      expect(pokemon.baseAttack).to.be.equals(
        PokemonData.Pikachu.baseStats.attack,
      );
    });
  });

  describe("get baseSpecial", () => {
    it("should return baseSpecial", () => {
      expect(pokemon.baseSpecial).to.be.equals(
        PokemonData.Pikachu.baseStats.special,
      );
    });
  });

  describe("get baseDef", () => {
    it("should return baseDef", () => {
      expect(pokemon.baseDef).to.be.equals(PokemonData.Pikachu.baseStats.def);
    });
  });

  describe("get baseSpeed", () => {
    it("should return baseSpeed", () => {
      expect(pokemon.baseSpeed).to.be.equals(
        PokemonData.Pikachu.baseStats.speed,
      );
    });
  });

  describe("get hp", () => {
    it("should return calculated hp", () => {
      expect(pokemon.hp).to.be.equals(189);
    });
  });

  describe("get attack", () => {
    it("should return calculated attack", () => {
      expect(pokemon.attack).to.be.equals(137);
    });
  });

  describe("get def", () => {
    it("should return calculated def", () => {
      expect(pokemon.def).to.be.equals(101);
    });
  });

  describe("get special", () => {
    it("should return calculated special", () => {
      expect(pokemon.special).to.be.equals(128);
    });
  });

  describe("get speed", () => {
    it("should return calculated speed", () => {
      expect(pokemon.speed).to.be.equals(190);
    });
  });

  describe("get state", () => {
    it("should return state", () => {
      expect(pokemon.state).to.deep.equals({
        level: 81,
        exp: 531441,
        moves: [new Thunderbolt(), new Tackle()],
        currentHp: 100,
      });
    });
  });

  describe("get isAlive", () => {
    it("should return true", () => {
      expect(pokemon.isAlive).to.be.equals(true);
    });
  });

  describe("get isFainted", () => {
    it("should return false", () => {
      expect(pokemon.isFainted).to.be.equals(false);
    });
  });

  describe("getNextLevelExp", () => {
    it("should return 88213", () => {
      expect(pokemon.getNextLevelExp()).to.be.equals(551368);
    });
  });

  describe("gainExp when receive suficient to level up 1 time", () => {
    it("should level up", () => {
      const levelUpXp = pokemon.getNextLevelExp() - 531441;
      const result = pokemon.gainExp(levelUpXp);
      expect(result.canEvolve).to.be.equals(false);
      expect(result.hasLeveledUp).to.be.equals(true);
      expect(pokemon.level).to.be.equals(82);
    });
  });

  describe("gainExp when receive suficient to level up 2 times", () => {
    it("should level up 2 times", () => {
      const levelUpXp = pokemon.getNextLevelExp() + 35000 - 531441;
      const result = pokemon.gainExp(levelUpXp);
      expect(result.canEvolve).to.be.equals(false);
      expect(result.hasLeveledUp).to.be.equals(true);
      expect(pokemon.level).to.be.equals(83);
    });
  });

  describe("canEvolveByLevelUp", () => {
    it("should return false", () => {
      expect(!!pokemon.canEvolveByLevelUp()).to.be.equals(false);
    });
  });

  describe("canEvolveByStone (Fire Stone)", () => {
    it("should return false", () => {
      expect(!!pokemon.canEvolveByStone(EvolutionStone.FireStone)).to.be.equals(
        false,
      );
    });
  });

  describe("canEvolveByStone (Leaf Stone)", () => {
    it("should return false", () => {
      expect(!!pokemon.canEvolveByStone(EvolutionStone.LeafStone)).to.be.equals(
        false,
      );
    });
  });

  describe("canEvolveByStone (Moon Stone)", () => {
    it("should return false", () => {
      expect(!!pokemon.canEvolveByStone(EvolutionStone.MoonStone)).to.be.equals(
        false,
      );
    });
  });

  describe("canEvolveByStone (Thunder Stone)", () => {
    it("should return true", () => {
      expect(
        !!pokemon.canEvolveByStone(EvolutionStone.ThunderStone),
      ).to.be.equals(true);
    });
  });

  describe("canEvolveByStone (Water Stone)", () => {
    it("should return false", () => {
      expect(
        !!pokemon.canEvolveByStone(EvolutionStone.WaterStone),
      ).to.be.equals(false);
    });
  });

  describe("evolve with Thunder Stone", () => {
    it("should evolve to Raichu", () => {
      pokemon.evolve(EvolutionType.EvolutionStone, EvolutionStone.ThunderStone);
      expect(pokemon.name).to.be.equals(PokemonData.Raichu.name);
      expect(pokemon.number).to.be.equals(PokemonData.Raichu.number);
    });
  });
});
