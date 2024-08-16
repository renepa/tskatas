import { describe, expect, it } from 'vitest'
import { BeerSong } from './BeerSongClass'

describe('BeerSong with dedicated verses', () => {
  const beerSong = new BeerSong()

  it('sings the 8. verse only', () => {
    const verse = beerSong.sing(8)
    expect(verse).toEqual(
      '8 bottles of beer on the wall, 8 bottles of beer. \\n Take one down and pass it around, 7 bottles of beer on the wall.'
    )
  })

  it('sings the 0. verse only', () => {
    const verse = beerSong.sing(0)
    expect(verse).toEqual(
      'No more bottles of beer on the wall, no more bottles of beer. \\n Go to the store and buy some more, 99 bottles of beer on the wall.'
    )
  })

  it('sings last bottle of beer on the wall', () => {
    const verse = beerSong.sing(1)
    expect(verse).toEqual(
      '1 bottle of beer on the wall, 1 bottle of beer. \\n Take it down and pass it around, no more bottles of beer on the wall.'
    )
  })

  it('throws an error', () => {
    expect(() => beerSong.sing(-1)).toThrowError()
  })
})

describe('Sing beer song between verse x and y', () => {
  const beerSong = new BeerSong()

  it('sings from the 8. to the 5.', () => {
    const song = beerSong.singFromTo(8, 6)
    expect(song).toEqual(
      '8 bottles of beer on the wall, 8 bottles of beer. \\n Take one down and pass it around, 7 bottles of beer on the wall. 7 bottles of beer on the wall, 7 bottles of beer. \\n Take one down and pass it around, 6 bottles of beer on the wall. 6 bottles of beer on the wall, 6 bottles of beer. \\n Take one down and pass it around, 5 bottles of beer on the wall. '
    )
  })

  it('sings from the 3. to the 0.', () => {
    const song = beerSong.singFromTo(2, 0)
    expect(song).toEqual(
      '2 bottles of beer on the wall, 2 bottles of beer. \\n Take one down and pass it around, 1 bottle of beer on the wall. 1 bottle of beer on the wall, 1 bottle of beer. \\n Take it down and pass it around, no more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. \\n Go to the store and buy some more, 99 bottles of beer on the wall. '
    )
  })

  it('sings 6. only', () => {
    const song = beerSong.singFromTo(6, 6)
    expect(song).toEqual(
      '6 bottles of beer on the wall, 6 bottles of beer. \\n Take one down and pass it around, 5 bottles of beer on the wall. '
    )
  })
})
