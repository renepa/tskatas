export function getAlphabeticallySorted(toSort: string[]) {
  const newLocal = toSort.sort(compareStringOrder)
  return newLocal
}

/**
 *
 * @param word1 Hier muss jeder Buchstabe durchgegangen und verglichen werden. Kleinere Wörter 'verlieren'
 * @param word2
 * @param positionInString
 * @returns
 */
function compareStringOrder(word1: string, word2: string, positionInString: number = 0) {
  const sortValue =
    word1.toLowerCase().charCodeAt(positionInString) -
    word2.toLowerCase().charCodeAt(positionInString)
  if (sortValue === 0) {
    if (word1.length - 1 === positionInString || word2.length - 1 === positionInString) {
      return word1.length - word2.length
    }
    return compareStringOrder(word1, word2, ++positionInString)
  }
  return sortValue
}
