import { PlayerTile } from './playerTile'
export interface User {
  name: string
}
export class Player {
  constructor(readonly user: User, readonly playerTile: PlayerTile) {
    this.user = user;
    this.playerTile = playerTile;
  }
}