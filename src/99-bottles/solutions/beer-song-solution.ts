export class BeerSong {
  sing(from: number, to = 0) {
    return this.range(from, to).map(this.verse).join('\n')
  }

  verse(number: number) {
    switch (number) {
      case 0:
        return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`
      case 1:
        return `1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`
      case 2:
        return `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
`
      default:
        return `${number} bottles of beer on the wall, ${number} bottles of beer.
Take one down and pass it around, ${number - 1} bottles of beer on the wall.
`
    }
  }

  range(from: number, to: number): Array<number> {
    Array.of({})
  }
}
