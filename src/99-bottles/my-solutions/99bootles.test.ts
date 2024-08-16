import { describe, expect, it } from 'vitest'
import { BeerSong } from './BeerSongClass'

describe('BeerSong', () => {
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
    const verse = beerSong.sing(-1)
    expect(verse).toEqual(
      'No more bottles of beer on the wall, no more bottles of beer. \\n Go to the store and buy some more, 99 bottles of beer on the wall.'
    )
  })
})
