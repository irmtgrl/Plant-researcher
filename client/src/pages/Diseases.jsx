import { Nav } from "./Nav.jsx"
import Markdown from "react-markdown"
import plant3Img from "../assets/plant3.jpg";

export function Diseases({ title, content }) {
    return (
        <div>
            <Nav />
            <div className="flex flex-col items-center mt-8 max-w-[800px]">
                <div className="relative">
                    <h1 className="text-6xl lg:text-8xl">{title}</h1>
                    <div className="absolute w-full h-12 bottom-0 bg-linear-to-t from-beige to-transparent"></div>
                </div>
                <div className="container overflow-hidden">
                    <div className="w-full relative">
                        <img src={plant3Img} />
                        <div className="absolute w-full h-50 bottom-0 bg-linear-to-t from-beige to-transparent"></div>
                    </div>
                    <div className="p-12 w-full">
                        <Markdown>{content[3]}</Markdown>
                    </div>
                </div>
            </div>
        </div>
    )
}