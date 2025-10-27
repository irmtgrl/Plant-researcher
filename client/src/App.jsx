import { useEffect, useState, useRef } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import './App.css'
import { Info } from "./pages/Info.jsx"
import { Landing } from "./pages/Landing.jsx"
import { History } from './pages/History.jsx'

function App() {
  const [msg, setMsg] = useState(null)
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([])

  const inputRef = useRef(null)
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true)

    const userInput = inputRef.current.value
    const plant = [userInput.charAt(0).toUpperCase(), userInput.slice(1)].join("")
    if (!plant) return
    if(history.includes(plant)) {
      console.log("already searched it! check history")
      return
    }

    try{
      const res = await fetch(`http://localhost:8000/api/${plant}`)
      const data = await res.json()
      setMsg(data.message)
      localStorage.setItem(plant, data.message)
      navigate("/info")
    } catch (err) {
      console.error("Something went wrong!", err)
    } finally {
      inputRef.current.value = ""
      setLoading(false)
      setHistory(prev => [...prev, plant])
    }
  }

  return (
    <>
    <Routes>
      <Route path="/" element={
        <Landing 
          inputRef={inputRef}
          onSubmit={handleSubmit}
        />} />
      <Route path="/info" element={
        <Info 
          content={msg}
        />} />
      <Route path="/history" element={
        <History 
          entries={history}
        />
      } />
    </Routes>
    </>
  )
}

export default App
