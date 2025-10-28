import { Nav } from "./Nav.jsx"
import plant1Img from "../assets/plant1.jpg";

export function Care({ content }) {
    return(
        <div>
            <Nav />
            <div className="flex flex-col items-center mt-8 max-w-[800px]">
                <div className="relative">
                    <h1 className="text-6xl lg:text-8xl">{content}</h1>
                    <div className="absolute w-full h-12 bottom-0 bg-linear-to-t from-beige to-transparent"></div>
                </div>
                <div className="container overflow-hidden">
                    <div className="w-full relative">
                        <img src={plant1Img} />
                        <div className="absolute w-full h-50 bottom-0 bg-linear-to-t from-beige to-transparent"></div>
                    </div>
                    <p className="p-12">
                        ☀️ Işık Gereksinimi
Aloe vera, parlak ışık seven bir bitkidir. Doğrudan güneş ışığına maruz bırakılabilir, ancak özellikle öğle saatlerinde aşırı güneşten korumak gerekir.
Günde 5–10 saat ışık alması idealdir. Yetersiz ışık, bitkinin zayıf ve uzun boylu büyümesine neden olabilir
                    </p>
                </div>
            </div>
        </div>
    )
}