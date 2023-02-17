import { Link } from "react-router-dom"
import style from "../assets/css/components/NavList.module.css"

const NavList = () => {
  const NavListHTML = (
    <div className="listNav">
            
      <Link to={'/'} className="dec-none">
        <div className={`${style.itemNav}`}>
          <span className="lni lni-home"></span>
          <p>Inicio</p>
        </div>
      </Link>

    </div>
  )

  return NavListHTML
}

export default NavList