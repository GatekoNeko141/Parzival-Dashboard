import { useState } from 'react'
import { Hamburger } from '../components'
import style from '../assets/css/Layout.module.css'

const Layout = ({children}) => {
  const [barExpanded, setBarExpanded] = useState(true)

  const LayoutHTML = (<>
    <div className={`no-scroll d-flex w-100 vh-100`}>
      <div className={`${style.sideBar} ${(barExpanded ? style.sideBarExpanded : '')}`}>
        <div className={`${style.logoContainer}`}></div>
        <div className={`${style.navContainer} maq`}></div>
      </div>
      <div className={`${style.dashboardContainer}`}>
        <div className={`${style.headerContainer}`}>
          <div className="pt-2">
            <Hamburger open={true} barExpanded={barExpanded} setBarExpanded={setBarExpanded}/>
          </div>
        </div>
        <div className={`${style.contentDynamic} maq`}>
          {children}
        </div>
      </div>
    </div>
  </>)

  return LayoutHTML
}

Layout.defaultProps = {
  component: 'e'
}

export default Layout