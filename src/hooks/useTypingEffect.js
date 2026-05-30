import { useEffect, useRef, useState, useMemo } from 'react'

const TYPING_SPEED = 80
const DELETING_SPEED = 45
const HOLD_MS = 1400

export const useTypingEffect = (phrases) => {
  const safePhrases = useMemo(() => phrases ?? [], [phrases])
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const holdTimeoutRef = useRef(null)

  useEffect(() => {
    if (!safePhrases.length) return undefined

    const currentPhrase = safePhrases[phraseIndex % safePhrases.length]

    // Add slight randomness for natural feel
    const jitter = Math.random() * 30 - 15
    const speed = isDeleting
      ? DELETING_SPEED + jitter * 0.5
      : TYPING_SPEED + jitter

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentPhrase.slice(0, displayText.length + 1)
        setDisplayText(nextText)
        if (nextText === currentPhrase) {
          holdTimeoutRef.current = setTimeout(() => setIsDeleting(true), HOLD_MS)
        }
        return
      }

      const nextText = currentPhrase.slice(0, displayText.length - 1)
      setDisplayText(nextText)

      if (!nextText) {
        setIsDeleting(false)
        setPhraseIndex((prev) => prev + 1)
      }
    }, speed)

    return () => {
      clearTimeout(timeout)
      if (holdTimeoutRef.current) {
        clearTimeout(holdTimeoutRef.current)
      }
    }
  }, [displayText, isDeleting, phraseIndex, safePhrases])

  return displayText
}
