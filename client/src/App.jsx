import { useEffect, useState, useRef } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import './App.css'
import { Info } from "./pages/Info.jsx"
import { Landing } from "./pages/Landing.jsx"
import { History } from "./pages/History.jsx"
import { Care } from "./pages/Care.jsx"

function App() {
  const [content, setContent] = useState({})
  const [loading, setLoading] = useState(false)

  const inputRef = useRef(null)
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true)

    const userInput = inputRef.current.value
    const plant = [userInput.charAt(0).toUpperCase(), userInput.slice(1)].join("")
    if (!plant) return

    const history = Object.keys(localStorage)
    if(history.includes(plant)) {
      console.log("already searched it! check history")
      return
    }

    //data.message will be changed to data.title
    try{
      const res = await fetch(`http://localhost:8000/api/${plant}`)
      const data = await res.json()
      setContent({
        title: data.message,
        context: data.message
      })
      localStorage.setItem(plant, data.message)
      navigate("/info")
    } catch (err) {
      console.error("Something went wrong!", err)
    } finally {
      inputRef.current.value = ""
      setLoading(false)
    }
  }

  function changeContent(data) {
    setContent(data)
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
          content={content.title}
        />} />
      <Route path="/care" element={
        <Care 
          content={content.title}
        />} />
      <Route path="/history" element={
        <History 
          changeContent={changeContent}
        />
      } />
    </Routes>
    </>
  )
}

export default App
