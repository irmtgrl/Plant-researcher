import { useEffect, useState, useRef } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import './App.css'
import { Info } from "./pages/Info.jsx"
import { Landing } from "./pages/Landing.jsx"
import { History } from "./pages/History.jsx"
import { Care } from "./pages/Care.jsx"
import { Pests } from "./pages/Pests.jsx"
import { Diseases } from "./pages/Diseases.jsx"
import gsap from 'gsap'
import { SplitText } from "gsap/SplitText"

function App() {
  const [content, setContent] = useState({title: "", context: []})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const inputRef = useRef(null)
  const loadRef = useRef(null)
  const navigate = useNavigate()

  //Basic Loading Animation
  gsap.registerPlugin(SplitText) 
  useEffect(()=>{
    if (loading && loadRef.current) {
      const split = SplitText.create(loadRef.current, { type: "words" })
      gsap.from(split.words, {
        duration: 2,
        delay: 0.5,
        x: 50,
        autoAlpha: 0,
        stagger: 0.2,
        repeat: -1,
        repeatDelay: 1,
        ease: "power3.out",
      })
    }
  }, [loading])

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true)
    setError(null)

    const userInput = inputRef.current.value
    const plant = [userInput.charAt(0).toUpperCase(), userInput.slice(1)].join("")
    if (!plant) return

    const history = Object.keys(localStorage)
    if(history.includes(plant)) {
      setError({
        code: 308,
        content: "Bu bitki geçmiş aramalarda mevcut. Lütfen geçmişe göz atın."
      })
      setLoading(false)
      return
    }

    try{
      const res = await fetch(`https://plant-researcher.onrender.com/api/${plant}`)
      const data = await res.json()
      if(!data || !data.aiReport) {
        throw new Error("Sunucu ile geçici olarak bağlantı kurulamıyor.")
      } 

      const fixed = data.aiReport.replaceAll("---", "")
      const sections = fixed.split(/(?=^##\s)/gm)
      setContent({
        title: plant,
        context: sections
      })

      localStorage.setItem(plant, JSON.stringify(sections))
      navigate("/info")
    } catch (err) {
      setError({
        code: 500,
        content: "Sunucu ile bağlantı kurulamadı veya geçersiz yanıt alındı."
      })
      console.error("Can not connect to the server:", err)
    } finally {
      inputRef.current.value = ""
      setLoading(false)
    }
  }

  function changeContent(data) {
    setContent({
      title: data.title,
      context: data.context
    })
  }

  return (
    <>
    <Routes>
      <Route path="/" element={
        <Landing 
          inputRef={inputRef}
          onSubmit={handleSubmit}
          isLoading={loading}
          loadRef={loadRef}
          error={error}
        />} />
      <Route path="/info" element={
        <Info 
          title={content.title}
          content={content?.context}
        />} />
      <Route path="/care" element={
        <Care 
          title={content.title}
          content={content?.context}
        />} />
      <Route path="/pests" element={
        <Pests 
          title={content.title}
          content={content?.context}
        />} />
      <Route path="/diseases" element={
        <Diseases 
          title={content.title}
          content={content?.context}
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
