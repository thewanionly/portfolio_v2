const removePunctuation = (text: string) =>
  text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s{2,}/g, ' ')

export const renderDescription = (
  description: string,
  highlightedWords?: string[],
  highlightedWordComponent?: React.ElementType
): string | React.ReactNode[] => {
  if (!highlightedWords || highlightedWords.length === 0) return description

  const HighlightedWord = highlightedWordComponent || 'strong'
  const highLightedWordMap: { [key: string]: string } = {}
  let updatedDescription = description

  // Create a one-word reference to the hightLightedWord in the description text
  // This is in order for the highlighted words not to be split up into multiple words when split
  highlightedWords.forEach((word) => {
    const referenceWord: string = (Math.random() + 1).toString(36).substring(7)

    highLightedWordMap[referenceWord] = word

    updatedDescription = updatedDescription.replace(word, referenceWord)
  })

  const descriptionArray = updatedDescription.split(' ')

  return descriptionArray.map((word, idx) => {
    const addSpace = idx !== descriptionArray.length - 1
    const rawWord = removePunctuation(word)

    if (Object.keys(highLightedWordMap).includes(rawWord)) {
      const actualText = word.replace(rawWord, highLightedWordMap[rawWord])
      return (
        <HighlightedWord key={rawWord}>
          {addSpace ? `${actualText} ` : actualText}
        </HighlightedWord>
      )
    }

    return <span key={word}>{addSpace ? `${word} ` : word}</span>
  })
}
