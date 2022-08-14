import { types } from "util";

export interface Tile {
  
}
    
export class Suit implements Tile {
  private readonly MIN = 1
  private readonly MAX = 9
  private readonly VARIETIES = ['characters', 'wheels', 'bamboo']
  constructor(readonly order: number, readonly variety: string) {
    const isSuitRange = this.MIN <= order && order <= this.MAX
    if(!isSuitRange) throw 'order is not between 1 and 9';
    if(!this.VARIETIES.includes(variety)) throw 'variety is neither characters, wheels nor bamboo';
    this.order = order;
    this.variety = variety;
  }
}
    
export class Honour implements Tile {
  private readonly NAMES = ['white', 'green', 'red', 'east', 'south', 'west', 'north']
  constructor(readonly name: string) {
    if(!this.NAMES.includes(name)) throw `${name} is not right value as name`;
    this.name = name;
  }
}

