export function Landing({ inputRef, onSubmit }) {
    return(
        <div className="flex flex-col gap-2">
            <h1>Bitki Bilgi</h1>
            <p>Bitkiler hakkında genel bilgi, bakım önerileri, bitkinin ararlıları ve hastalıkları hakkında bilgi almak için bitki adını giriniz. Öneriler yapay zeka tarafınfan oluşturulur.</p>

            <form 
            onSubmit={onSubmit}
            className="flex gap-4 mt-2">
                <input ref={inputRef} type="text" placeholder="Bitki adı örn; papatya" className="focus:outline focus:outline-burgundy"/>
                <button type="submit" className="cursor-pointer opacity-50 hover:opacity-100 transition ease-in-out duration-300">Ara</button>
            </form>
        </div>
    )
}