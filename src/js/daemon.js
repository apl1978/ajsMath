import MathCharacter from './mathcharacter';

export default class Daemon extends MathCharacter {
  constructor(name, type) {
    super(name, type);
    this.attack = 100;
    this.defence = 40;
  }
}
