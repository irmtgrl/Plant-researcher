export function Landing({ inputRef, onSubmit }) {
    return(
        <div>
            <h1>Bitki Bilgi</h1>
            <p>Bitkiler hakkında genel bilgi, bakım önerileri, bitkinin ararlıları ve hastalıkları hakkında bilgi almak için bitki adını giriniz. Öneriler yapay zeka tarafınfan oluşturulur.</p>

            <form onSubmit={onSubmit}>
                <input ref={inputRef} type="text" placeholder="Bitki adı örn; papatya"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}