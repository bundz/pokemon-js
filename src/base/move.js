export class Move {
  #name;
  #type;
  #category;
  #pp;
  #power;
  #accuracy;

  constructor({ name, type, category, pp, power, accuracy }) {
    this.#name = name;
    this.#type = type;
    this.#category = category;
    this.#pp = pp;
    this.#power = power;
    this.#accuracy = accuracy;
  }

  get name() {
    return this.#name;
  }

  get type() {
    return this.#type;
  }

  get category() {
    return this.#category;
  }

  get pp() {
    return this.#pp;
  }

  get power() {
    return this.#power;
  }

  get accuracy() {
    return this.#accuracy;
  }
}
