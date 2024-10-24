import { NumberOfBottlesVerse } from './NumberOfBottlesVerse'

export class NumberOfBottlesVerse1 extends NumberOfBottlesVerse {
  newBottleSentence(): string {
    return `no more bottles of beer on the wall.`
  }

  actionSentence(): string {
    return 'Take it down and pass it around'
  }

  protected getBottleContainer(numberOfBottles: number): string {
    if (numberOfBottles > 1) {
      return `${numberOfBottles} bottles`
    }
    return `${numberOfBottles} bottle`
  }
}
