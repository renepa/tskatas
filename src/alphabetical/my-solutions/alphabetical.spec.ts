import { describe, it, expect } from 'vitest'
import { getAlphabeticallySorted } from './own-recursive/alphabetical'

describe('alphabetical', () => {
  it('should sort alphabetically', () => {
    const given = ['javascript', 'java', 'python', 'lua']

    const actual = getAlphabeticallySorted(given)

    expect(actual).toEqual(['java', 'javascript', 'lua', 'python'])
  })

  it('should sort characters', () => {
    const given = ['y', 'c', 'g', 'a']

    const actual = getAlphabeticallySorted(given)

    expect(actual).toEqual(['a', 'c', 'g', 'y'])
  })

  it('should sort characters with lower an upper case', () => {
    const given = ['javaScript', 'Java', 'pythoN', 'Lua']

    const actual = getAlphabeticallySorted(given)

    expect(actual).toEqual(['Java', 'javaScript', 'Lua', 'pythoN'])
  })

  it('should sort same words in same order', () => {
    const given = ['python', 'javaScript', 'javaScript', 'python']

    const actual = getAlphabeticallySorted(given)

    expect(actual).toEqual(['javaScript', 'javaScript', 'python', 'python'])
  })
})
