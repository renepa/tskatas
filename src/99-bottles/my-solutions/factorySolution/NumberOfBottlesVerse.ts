import { BottleVerse } from './BottleVerse'
/**
 * Implementation for all cases from 99 - 1
 */
export class NumberOfBottlesVerse implements BottleVerse {
  constructor(private verseNumber: number) {}

  newBottleSentence(): string {
    const bottleString = this.getBottleContainer(--this.verseNumber)
    return `${bottleString} of beer on the wall.`
  }

  currentBottlesSentence(): string {
    const bottleString = this.getBottleContainer(this.verseNumber)
    return `${bottleString} of beer on the wall, ${bottleString} of beer.`
  }

  actionSentence(): string {
    return 'Take one down and pass it around'
  }

  protected getBottleContainer(numberOfBottles: number): string {
    if (numberOfBottles > 1) {
      return `${numberOfBottles} bottles`
    }
    return `${numberOfBottles} bottle`
  }
}
