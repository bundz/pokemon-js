import { Pokemon } from "../pokemon";
import { PCBox } from "./pc-box";
import { IPCBox } from "./pc-box.type";

export class PC {
  private _boxes: PCBox[] = [];

  constructor(pcBoxes?: IPCBox[]) {
    this.fillBoxes(pcBoxes);
  }

  private fillBoxes(pcBoxes?: IPCBox[]) {
    if (pcBoxes) {
      for (const [i, box] of pcBoxes.entries()) {
        this._boxes[i] = new PCBox({ name: box.name, slots: box.slots });
      }

      return;
    }

    for (let i = 0; i < 12; i++) {
      this._boxes[i] = new PCBox({ name: `BOX ${i + 1}`, slots: [] });
    }
  }

  addPokemon(pokemon: Pokemon) {
    for (const box of this._boxes) {
      const result = box.addToFreeSlot(pokemon);

      if (result) {
        return;
      }
    }

    return false;
  }

  get boxes() {
    return this._boxes;
  }
}
