import { useEffect, useMemo, useState } from 'react'

const TYPING_SPEED = 85
const DELETING_SPEED = 50
const HOLD_MS = 1200

export const useTypingEffect = (phrases) => {
  const safePhrases = useMemo(() => phrases ?? [], [phrases])
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!safePhrases.length) return undefined

    const currentPhrase = safePhrases[phraseIndex % safePhrases.length]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentPhrase.slice(0, displayText.length + 1)
          setDisplayText(nextText)
          if (nextText === currentPhrase) {
            setTimeout(() => setIsDeleting(true), HOLD_MS)
          }
          return
        }

        const nextText = currentPhrase.slice(0, displayText.length - 1)
        setDisplayText(nextText)

        if (!nextText) {
          setIsDeleting(false)
          setPhraseIndex((prev) => prev + 1)
        }
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex, safePhrases])

  return displayText
}
