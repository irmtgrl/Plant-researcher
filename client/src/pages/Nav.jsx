import { Link } from "react-router-dom"

export function Nav() {
return(
    <>
    <nav className="hidden lg:block lg:fixed left-8 top-8">
      <ul>
        <li className="opacity-50 hover:opacity-100 transition duration-300 ease-in-out"><Link to="/">Ana Sayfa</Link></li>
        <li className="opacity-50 hover:opacity-100 transition duration-300 ease-in-out"><Link to="/info">Hakkında</Link></li>
        <li className="opacity-50 hover:opacity-100 transition duration-300 ease-in-out"><Link to="/care">Bakım</Link></li>
        <li className="opacity-50 hover:opacity-100 transition duration-300 ease-in-out">Zararlılar</li>
        <li className="opacity-50 hover:opacity-100 transition duration-300 ease-in-out">Hastalıklar</li>
        <li className="opacity-50 hover:opacity-100 transition duration-300 ease-in-out"><Link to="/history">Geçmiş</Link></li>
      </ul>
    </nav>
    </>
)
}