import { useState, useEffect, MutableRefObject } from 'react'

export const useIsVisible = (ref: any) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const { isIntersecting } = entries[0]
      isIntersecting && setIsVisible(isIntersecting)
    })
    observer.observe(ref.current)
    
    return () => observer.disconnect()
  }, [])

  return isVisible
}