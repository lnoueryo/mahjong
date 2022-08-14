import { Wall } from './wall'
import { Suit, Honour, Tile } from './tile'
import { Table } from './table'
import { Player, User } from './player'
import { PlayerTile } from './playerTile'
export class Mahjong {
  readonly players: Array<Player>
  readonly table: Table
  readonly wall: Wall
  constructor(users: User[], game: string, players?: Array<Player>, table?: Table, wall?: Wall) {
    this.players = players || this.createPlayers(users);
    this.table = table || this.createTable(game);
    this.wall = wall || this.createWall();
  }
  private createPlayers(users: User[]) {
    const players = users.map((user: User) => {
      return new Player(user, [], []);
    })
    return players;
  }
  private createTable(game: string) {
    return new Table(game, 1);
  }
  private createWall() {
    const tiles = this.createTiles();
    const shuffleTiles = this.arrayShuffle(tiles);
    const tileWall = shuffleTiles.slice(0, 122);
    const deadWall = shuffleTiles.slice(122);
    return new Wall(tileWall, deadWall)
  }
  dealTiles() {
    const wallTiles: Array<Tile> = [];
    const players = this.players.map((player: Player, i: number) => {
      const tiles = [];
      for (let j = 0; j < 13; j++) {
        const index = i * 13 + j;
        const tile = this.wall.pickupWallTile(index);
        tiles.push(tile)
        wallTiles.push(tile)
      }
      return player.dealTiles(tiles);
    })
    const wall = this.wall.removeTiles(wallTiles)
    return new Mahjong([], '', players, this.table, wall)
  }
  // drawTile(currntPlayer: Player) {
  //   const tile = this.wall.pickupWallTile();
  //   const wall = this.wall.removeTile(tile);
  //   const drawingPlayer = currntPlayer.drawTile(tile);
  //   const players = this.players.map((player: Player) => {
  //     return player.user.id === drawingPlayer.user.id ? drawingPlayer : player;
  //   })
  //   return new Mahjong([], '', players, this.table, wall)
  // }
  private createTiles() {
    const varieties = ['characters', 'wheels', 'bamboo']
    const honourNames = ['white', 'green', 'red', 'east', 'south', 'west', 'north']
    const tiles: Array<Tile> = [];
    let id = 1;
    varieties.forEach((variety: string) => {
      for (let i = 1; i < 10; i++) {
        for (let j = 0; j < 4; j++) {
          tiles.push(new Suit(i, variety, id));
          id += 1;
        }
      }
    })
    
    honourNames.forEach((name: string) => {
      for (let i = 0; i < 4; i++) {
        tiles.push(new Honour(name, id))
        id += 1;
      }
    })
    return tiles;
  }
  private arrayShuffle(array: any[]) {
    for(var i = (array.length - 1); 0 < i; i--)  {
      var r = Math.floor(Math.random() * (i + 1));
      var tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }
    return array;
  }
}