import { types } from "util";

export interface Tile {
  
}
    
export class Suit implements Tile {
  private readonly MIN = 1
  private readonly MAX = 9
  constructor(readonly order: number, readonly variety: string) {
    const varieties = ['characters', 'wheels', 'bamboo']
    const isSuitRange = this.MIN <= order && order <= this.MAX
    if(!isSuitRange) throw 'order is not between 1 and 9';
    if(!varieties.includes(variety)) throw 'variety is neither characters, wheels nor bamboo';
    this.order = order;
    this.variety = variety;
  }
}
    
export class Honour implements Tile {
  constructor(readonly name: string) {
    const names = ['white', 'green', 'red', 'east', 'south', 'west', 'north']
    if(!names.includes(name)) throw `${name} is not right value as name`;
    this.name = name;
  }
}

