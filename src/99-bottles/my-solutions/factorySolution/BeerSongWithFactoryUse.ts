import { BottleVerseFactory } from './BottleSongFactory/BottleVerseFactory'

export class BeerSongWithFactoryUse {
  sing(verseNumber: number): string {
    const verse = BottleVerseFactory.forVerse(verseNumber)
    return `${verse.currentBottlesSentence()} \\n ${verse.actionSentence()}, ${verse.newBottleSentence()}`
  }

  singFromTo(startVerseNumber: number, endVerseNumber: number): string {
    let song = ''
    for (let i = startVerseNumber; i >= endVerseNumber; i--) {
      song += `${this.sing(i)} `
    }
    return song
  }
}
