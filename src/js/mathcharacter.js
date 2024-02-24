import Character from './character';

export default class MathCharacter extends Character {
  #stoned;
  #attack;

  constructor(name, type) {
    super(name, type);
    this.range = 1;
    this.#stoned = false;
  }

  set attack(value) {
    this.#attack = value;
  }

  get attack() {
    let attack = this.#attack;

    attack -= attack * ((this.range - 1) / 10);

    if (this.#stoned) {
      attack -= Math.log(this.range) * 5;
    }
    return attack > 0 ? Math.floor(attack) : 0;
  }

  set stoned(value) {
    this.#stoned = value;
  }

  get stoned() {
    return this.#stoned;
  }
}

