import { Nav } from "./Nav"
import deleteIcon from "../assets/delete-icon.svg"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function History({ changeContent }) {
    const [historyItems, setHistoryItems] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const keys = Object.keys(localStorage)
        setHistoryItems(keys)
    }, [])

    const displayHistory = historyItems.map((plant, i) => {
        return (
            <div 
            key={plant} 
            onClick={()=> bringData(plant)}
            className="flex justify-between items-center p-2 mb-2 w-60 border-b border-transparent hover:border-burgundy hover:cursor-pointer transition delay-50 duration-300 ease-in-out"
            >
                <p>{plant}</p>
                <img onClick={(e) => {
                    e.stopPropagation()
                    removeData(plant)}}
                    src={deleteIcon} 
                    className="opacity-20 hover:opacity-100 transition delay-50 duration-300 ease-in-out" />
            </div>
        )
    })

    function bringData(id) {
        const title = id
        const raw = localStorage.getItem(id)
        const context = JSON.parse(raw)
        changeContent({
            title: title,
            context: context
        })
        navigate("/info")
    }

    function removeData(id) {
        localStorage.removeItem(id)
        setHistoryItems(prev => prev.filter(key => key !== id))
    }

    return(
        <div className="flex flex-col items-center">
            <Nav />
            <h1 className="mb-6">History</h1>
            {historyItems.length === 0 && <p>Nothing in history.</p>}
            {displayHistory}
        </div>
    )
}