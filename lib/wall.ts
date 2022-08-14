import { Suit, Honour, Tile } from './tile'

export class Wall {
  readonly wallTiles: Array<Tile>
  readonly deadWall: Array<Tile>
  constructor(wallTiles: Array<Tile>, deadWall: Array<Tile>) {
    this.wallTiles = wallTiles;
    this.deadWall = deadWall;
  }
  pickupWallTile(i: number) {
    return this.wallTiles[i];
  }
  removeTiles(tiles: Array<Tile>) {
    const wallTiles = this.wallTiles.filter((wallTile: Tile) => {
      return !tiles.includes(wallTile);
    })
    return new Wall(wallTiles, this.deadWall);
  }
}
