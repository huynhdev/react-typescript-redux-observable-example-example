import { useState, useEffect } from 'react'

const useInfiniteScroll = (callback: { (): void }, enable = true) => {
  const [isFetching, setIsFetching] = useState<boolean>(false)

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return
    setIsFetching(true)
  }

  useEffect(() => {
    if (enable) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [enable, handleScroll])

  useEffect(() => {
    if (!isFetching) return
    callback()
  }, [callback, isFetching])

  return [isFetching, setIsFetching] as const
}

export default useInfiniteScroll
