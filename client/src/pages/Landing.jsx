import { Link } from "react-router-dom"

export function Landing({ inputRef, onSubmit, isLoading, loadRef, error }) {
    return(
        <div className="flex flex-col gap-2">
            <h1>Bitki Bilgi</h1>
            <p>Bitkiler hakkında genel bilgi, bakım önerileri, bitkinin zararlıları ve hastalıkları hakkında bilgi almak için bitki adını giriniz. Öneriler yapay zeka tarafından oluşturulur.</p>

            <form 
            onSubmit={onSubmit}
            className="flex gap-4 mt-2">
                <input ref={inputRef} 
                type="text" 
                placeholder="Bitki adı örn; papatya" 
                className="focus:outline focus:outline-burgundy"/>
                <button 
                type="submit" 
                className="cursor-pointer opacity-50 hover:opacity-100 
                transition ease-in-out duration-300">Ara</button>
            </form>

            <Link to="/history">
                <p className="
                underline opacity-50 hover:opacity-100 cursor-pointer  
                transition ease-in-out duration-300 mt-4"
                >Geçmiş aramalar</p>
            </Link>

            {isLoading && <p ref={loadRef} className="text-lime-600 mt-4">AI yanıtı bekleniyor. Birkaç dakika sürebilir, lütfen bekleyiniz. 🌿🐝</p>}
            {error && 
            <div className="text-red-500 mt-4 border border-red-500 p-4">
                <h2>Hata: {error.code}</h2>    
                <p>{error.content}</p>
            </div>}
        </div>
    )
}