import { NumberOfBottlesVerse } from './NumberOfBottlesVerse'

export class NumberOfBottlesVerse0 extends NumberOfBottlesVerse {
  newBottleSentence(): string {
    return `99 bottles of beer on the wall.`
  }

  currentBottlesSentence(): string {
    return `No more bottles of beer on the wall, no more bottles of beer.`
  }

  actionSentence(): string {
    return 'Go to the store and buy some more'
  }

  protected getBottleContainer(numberOfBottles: number): string {
    if (numberOfBottles > 1) {
      return `${numberOfBottles} bottles`
    }
    return `${numberOfBottles} bottle`
  }
}
