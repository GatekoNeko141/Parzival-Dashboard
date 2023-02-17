import { Link } from "react-router-dom"
import style from "../assets/css/components/NavList.module.css"
import { useSelector } from "react-redux"

const NavList = () => {
  const navList = useSelector(state => state.globals.navList)

  const NavListHTML = (
    <div className="listNav">
      {
        navList.map(navItem =>
          navItem.tag === 'divisor' ?
          <div key={navItem.title} className={style.divisor}>
            <p>{navItem.title}</p>
          </div>:
          <Link key={navItem.title} to={navItem.path} className="dec-none">
            <div className={`${style.itemNav}`}>
              <span className={`lni lni-${navItem.icon}`}></span>
              <p>{navItem.title}</p>
            </div>
          </Link>
        )
      }
    </div>
  )

  return NavListHTML
}

export default NavList