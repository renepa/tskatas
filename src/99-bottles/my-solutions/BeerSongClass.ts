export class BeerSong {
  sing(verseNumber: number): string {
    if (verseNumber > 2) {
      return `${verseNumber} bottles of beer on the wall, ${verseNumber} bottles of beer. \\n Take one down and pass it around, ${
        verseNumber - 1
      } bottles of beer on the wall.`
    } else if (verseNumber === 2) {
      return `2 bottles of beer on the wall, 2 bottles of beer. \\n Take one down and pass it around, 1 bottle of beer on the wall.`
    } else if (verseNumber === 1) {
      return `1 bottle of beer on the wall, 1 bottle of beer. \\n Take it down and pass it around, no more bottles of beer on the wall.`
    } else if (verseNumber === 0) {
      return 'No more bottles of beer on the wall, no more bottles of beer. \\n Go to the store and buy some more, 99 bottles of beer on the wall.'
    }
    throw Error('There is no verse < 0')
  }

  singFromTo(startVerseNumber: number, endVerseNumber: number): string {
    let song = ''
    for (let i = startVerseNumber; i >= endVerseNumber; i--) {
      song += `${this.sing(i)} `
    }
    return song
  }
}

/* Concept
Generell : 
1. Bottle - # < 2
2. Bottles - # > 2

Erster Satz:
1. x Bottle(s) of Beer on the wall, x bottle of beer - # >= 1
2. No more bottles of beer on the wall, no more bottles of beer # = 0

Zweiter Satz: Action
1. Take one down and pass it around - # > 1
2. Take it down and pass it around - # = 1
2 Go to the store and buy some more # = 0

Zweiter Satz: Anzahl
1. Bottle(s) of beer on the wall - # > 1
2. No more bottles of beer on the wall - # = 1
3. 99 bootles of beer on the wall # = 0

Implementierungen
1. Standard : alles größer 1

*/
