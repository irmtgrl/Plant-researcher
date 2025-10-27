import { Link } from "react-router-dom"

export function Nav() {
return(
    <>
    <nav className="fixed left-8">
      <ul className="[&>*]:opacity-50 hover:[&>*]:opacity-100">
        <li><Link to="/">Ana Sayfa</Link></li>
        <li><Link to="/info">Hakkında</Link></li>
        <li>Bakım</li>
        <li>Zararlılar</li>
        <li>Hastalıklar</li>
        <li><Link to="/history">Geçmiş</Link></li>
      </ul>
    </nav>
    </>
)
}