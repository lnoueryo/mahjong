import { Wall } from './wall'
import { Suit, Honour, Tile } from './tile'
import { Table } from './table'
import { Player, User } from './player'
import { PlayerTile } from './playerTile'
export class Mahjong {
  readonly players: Array<Player>
  readonly table: Table
  readonly wall: Wall
  constructor(users: User[], game: string) {
    this.players = this.createPlayers(users);
    this.table = this.createTable(game);
    this.wall = this.createWall();
  }
  private createPlayers(users: User[]) {
    const players = users.map((user: User) => {
      const playerTiles = new PlayerTile([], [])
      return new Player(user, playerTiles);
    })
    return players;
  }
  private createTable(game: string) {
    return new Table(game, 1);
  }
  private createWall() {
    const varieties = ['characters', 'wheels', 'bamboo']
    const honourNames = ['white', 'green', 'red', 'east', 'south', 'west', 'north']
    const tiles: Array<Tile> = [];
    varieties.forEach((variety: string) => {
      for (let i = 1; i <= 9; i++) {
        for (let j = 0; j < 4; j++) {
          tiles.push(new Suit(i, variety))
        }
      }
    })

    honourNames.forEach((name: string) => {
      for (let i = 0; i < 4; i++) {
        tiles.push(new Honour(name))
      }
    })
    return new Wall(tiles);
  }
}