import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
function App() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    document.title = `counter`
  }, [])
  const buttonRef = useRef<HTMLButtonElement>(null)
  return (
    <div className="min-h-screen text-white  bg-slate-950 p-24 text-3xl font-bold font-serif text-center">
      <div className="space-y-8 bg-slate-900 shadow-md shadow-slate-900 p-8 inline-block rounded-xl">
        <h1 className="">REACT COUNTER APP</h1>
        <p>we have clicked this button for <span className="text-[40px] text-red-700">{counter}</span> times</p>
        <button className="bg-slate-300 text-slate-950 text-xl font-medium px-8 py-2 rounded-full hover:scale-105 active:scale-95"
          ref={buttonRef} onClick={() => { setCounter(counter + 1) }}
        >Add count</button>
      </div>
    </div>
  )
}

export default App
