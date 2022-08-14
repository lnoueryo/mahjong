import { Suit, Honour, Tile } from './tile'

export class Wall {
  readonly tiles: Array<Tile>
  constructor(tiles: Array<Tile>) {
    this.tiles = tiles;
  }
  pickupTile() {
    return this.tiles[0]
  }
}
