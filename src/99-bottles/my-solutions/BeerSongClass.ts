export class BeerSong {
  sing(verseNumber: number): string {
    if (verseNumber > 1) {
      return `${verseNumber} bottles of beer on the wall, ${verseNumber} bottles of beer. \\n Take one down and pass it around, ${
        verseNumber - 1
      } bottles of beer on the wall.`
    } else if (verseNumber === 1) {
      return `1 bottle of beer on the wall, 1 bottle of beer. \\n Take it down and pass it around, no more bottles of beer on the wall.`
    }
    return 'No more bottles of beer on the wall, no more bottles of beer. \\n Go to the store and buy some more, 99 bottles of beer on the wall.'
  }
}
