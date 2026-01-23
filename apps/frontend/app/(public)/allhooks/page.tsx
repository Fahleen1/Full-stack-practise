'use client'
import useFetch from "@/hooks/customHook";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"

const themeContext = createContext<{ theme: 'light' | 'dark'; toggleTheme: () => void } | null>(null)

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  //useContext
  const themeValue = useContext(themeContext)
  console.log("Child rendered")
  return <button onClick={onClick} className={`mt-3 text-xs px-2 py-1.5 ${themeValue?.theme === 'light'
    ? 'bg-white text-black'
    : 'bg-black text-white'
    }`}>Click me</button>
})

function allHooks() {
  //useState
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Calling custom hook
  const { data } = useFetch('https://official-joke-api.appspot.com/random_joke')
  const dataString = JSON.stringify(data)

  //useRef
  const countRef = useRef(false)

  //useMemo
  const num = useMemo(() => {
    return count * 1000
  }, [count])

  const increment = () => {
    setCount(count + 1)
  }

  //useCallback
  const withCallback = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  // const withoutCallback = () => {
  //   setCount(prev => prev + 1)
  // }

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  //useEffect
  // useEffect(()=>{
  //   console.log("This will print on each render")
  // })
  // useEffect(() => {
  //   if (!countRef.current) {
  //     countRef.current = true
  //     return
  //   }
  //   console.log("This will print when count changes")
  // }, [count])

  // useEffect(() => {
  //   console.log("This will print one time")
  // }, [])

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="flex flex-row gap-3 mb-3">
          Count is: {count}
          <button onClick={increment} className="bg-white text-black px-2 text-xs">Increment</button>
        </div>

        <p className="mb-3">
          Square of this number is {num}
        </p>

        <Child onClick={withCallback} />
        <button
          onClick={toggleTheme}
          className={`mt-3 text-xs px-2 py-1.5 ${theme === 'light'
            ? 'bg-white text-black'
            : 'bg-black text-white'
            }`}
        >
          Change theme
        </button>
        <div>
          {dataString}
        </div>
      </div>
    </themeContext.Provider>
  )
}

export default allHooks