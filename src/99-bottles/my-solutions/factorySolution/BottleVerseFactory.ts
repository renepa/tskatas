import { BottleVerse } from './BottleVerse'
import { NumberOfBottlesVerse } from './NumberOfBottlesVerse'

export class BottleVerseFactory {
  static forVerse(numberOfBottles: number): BottleVerse {
    return new NumberOfBottlesVerse(numberOfBottles)
  }
}
