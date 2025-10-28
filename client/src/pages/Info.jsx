import { Nav } from "./Nav.jsx"
import { Link } from "react-router-dom";
import Markdown from "react-markdown"
import plant1Img from "../assets/plant1.jpg";
import plant2Img from "../assets/plant2.jpg";
import plant3Img from "../assets/plant3.jpg";


export function Info({ title, content }) {
    return(
        <div>
            <Nav />
            <h1>{title}</h1>
            <Markdown>{content[0]}</Markdown>
            <div className="flex flex-col md:flex-row md:justify-around items-center w-full mt-4 gap-2">
                <Link to="/care">
                    <div className="card relative hover:scale-105 transition delay-150 duration-300 ease-in-out">
                        <img src={plant1Img} alt="plant-image" style={{objectFit: "cover", height: "100%", borderRadius: "16px"}} />
                        <h2 className="z-5 absolute bottom-0">Bakım</h2>
                        <div className="absolute bottom-0 rounded-2xl z-1 w-full h-1/2 bg-linear-to-t from-burgundy to-transparent"></div>
                    </div>
                </Link>
                <Link to="/pests">
                    <div className="card relative hover:scale-105 transition delay-150 duration-300 ease-in-out">
                        <img src={plant2Img} alt="plant-image" style={{objectFit: "cover", height: "100%", borderRadius: "16px"}} />
                        <h2 className="z-5 absolute bottom-0">Zararlılar</h2>
                        <div className="absolute bottom-0 rounded-2xl z-1 w-full h-1/2 bg-linear-to-t from-burgundy to-transparent"></div>
                    </div>
                </Link>
                <Link to="/diseases">
                    <div className="card relative hover:scale-105 transition delay-150 duration-300 ease-in-out">
                        <img src={plant3Img} alt="plant-image" style={{objectFit: "cover", height: "100%", borderRadius: "16px"}} />
                        <h2 className="z-5 absolute bottom-0">Hastalıklar</h2>
                        <div className="absolute bottom-0 rounded-2xl z-1 w-full h-1/2 bg-linear-to-t from-burgundy to-transparent"></div>
                    </div>
                </Link>
            </div>
        </div>

    )
}