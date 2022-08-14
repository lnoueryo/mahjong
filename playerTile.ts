import { Tile } from './tile'
// interface PlayerTileType {
//   handTiles: Tile[]
//   discardedTile: Tile[]
// }
export class PlayerTile {
  constructor(readonly handTiles: Array<Tile>, readonly discardedTile: Array<Tile>) {
    this.handTiles = handTiles;
    this.discardedTile = discardedTile;
  }
}