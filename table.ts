import { Tile, Suit, Honour } from './tile'
import { Player } from './player'

export class Table {
  private readonly GAMES = ['EastOnly', 'EastSouth']

  constructor(readonly game: string, readonly round: number) {
    if(!this.GAMES.includes(game)) throw 'game is neither EastOnly nor EastSouth'
    this.round = round;
    this.game = game;
  }
  nextGame() {
    const round = this.round + 1;
    return new Table(this.game, round)
  }
  start() {
    const varieties = ['characters', 'wheels', 'bamboo']
    const honourNames = ['white', 'green', 'red', 'east', 'south', 'west', 'north']
    const tiles: Tile[] = [];
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
  }
}