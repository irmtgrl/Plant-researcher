import { Nav } from "./Nav.jsx"

export function Info({ content }) {
    return(
        <div>
            <Nav />
            <h1>{content}</h1>
            <p>Aloe vera, sukulent bitki ailesine ait, etli yapraklara sahip bir türdür. Kökeni Arap Yarımadası ve Kuzey Afrika’ya dayanır, ancak günümüzde dünyanın birçok bölgesinde yetiştirilir. Yaprakları kalın, uzun ve kenarlarında küçük dikensi çıkıntılar bulunur. İçerisinde jeli andıran bir özsu barındırır. Bu özsu, cilt bakımından sindirim sistemine kadar geniş bir kullanım alanına sahiptir. Aloe vera, kurak iklimlere dayanıklıdır ve hem iç mekanlarda hem de dış mekanlarda yetiştirilebilir.</p>
            <div className="flex gap-4 mt-4">
            <div>
                <img></img>
                <h2>Bakım</h2>
            </div>
            <div>
                <img></img>
                <h2>Zararlılar</h2>
            </div>
            <div>
                <img></img>
                <h2>Hastalıklar</h2>
            </div>
            </div>
        </div>
    )
}