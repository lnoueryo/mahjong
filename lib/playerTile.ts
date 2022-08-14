import { Tile } from './tile'

export class PlayerTile {
  constructor(readonly handTiles: Array<Tile>, readonly discardedTile: Array<Tile>) {
    this.handTiles = handTiles;
    this.discardedTile = discardedTile;
  }
}