import { useEffect, useState } from 'react'

type FunctionType = <T>(value: T, delay: number) => T

const useDebounce: FunctionType = (value, delay) => {
  const [debounced, setDebounced] = useState<typeof value>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debounced
}

export default useDebounce
