import { BottleVerse } from './BottleVerse'
import { NumberOfBottlesVerse } from './NumberOfBottlesVerse'
import { NumberOfBottlesVerse0 } from './NumberOfBottlesVerse0'

export class BottleVerseFactory {
  static forVerse(numberOfBottles: number): BottleVerse {
    if (numberOfBottles === 0) {
      return new NumberOfBottlesVerse0(numberOfBottles)
    }
    return new NumberOfBottlesVerse(numberOfBottles)
  }
}
