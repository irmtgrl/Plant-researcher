import { Nav } from "./Nav"

export function History({ entries }) {
    const displayHistory = Object.values(entries).map(plant => {
        return (
            <div 
            key={plant} 
            onClick={()=> bringData(plant)}
            className="p-2 mb-2 border-b border-burgundy hover:cursor-pointer"
            >{plant}</div>
        )
    })
    function bringData(id) {
        console.log(id)
        localStorage.getItem(id)
    }

    return(
        <>
        <Nav />
        <h1>History</h1>
        {displayHistory}
        </>
    )
}