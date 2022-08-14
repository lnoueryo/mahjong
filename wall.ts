import { Suit, Honour, Tile } from './tile'

export class Wall {
  constructor(readonly tiles: Array<Tile>) {
    this.tiles = tiles;
  }
}
