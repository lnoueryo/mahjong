import { PlayerTile } from './playerTile'
import { Tile } from './tile'
export interface User {
  id: number
  name: string
}
export class Player {
  constructor(readonly user: User, readonly handTiles: Array<Tile>, readonly discardedTile: Array<Tile>) {
    this.user = user;
    this.handTiles = handTiles;
    this.discardedTile = discardedTile;
  }
  dealTiles(tiles: Array<Tile>) {
    return new Player(this.user, tiles, this.discardedTile)
  }
}