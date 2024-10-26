import { BottleVerse } from './BottleVerse'
import { NumberOfBottlesVerse } from './NumberOfBottlesVerse'
import { NumberOfBottlesVerse0 } from './NumberOfBottlesVerse0'
import { NumberOfBottlesVerse1 } from './NumberOfBottlesVerse1'

export class BottleVerseFactory {
  static forVerse(numberOfBottles: number): BottleVerse {
    if (numberOfBottles < 0) throw new Error('Invilad number of bottles. Must not smaller than 0')

    switch (numberOfBottles) {
      case 0:
        return new NumberOfBottlesVerse0(numberOfBottles)
      case 1:
        return new NumberOfBottlesVerse1(numberOfBottles)
      default:
        return new NumberOfBottlesVerse(numberOfBottles)
    }
  }
}
