import style from "../assets/css/components/Hamburguer.module.css"
const Hamburguer = ({open, barExpanded, setBarExpanded}) => {
  const handleInput = flag => {
    setBarExpanded(flag)
  }

  const HamburguerHTML = (
    <label htmlFor="burger" className={style.burger}>
      <input id="burger" type="checkbox" defaultChecked={open} onChange={() => {handleInput(!barExpanded)}}/>
      <span></span>
      <span></span>
      <span></span>
    </label>
  )

  return HamburguerHTML
}

export default Hamburguer