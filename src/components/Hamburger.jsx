import style from "../assets/css/Hamburguer.module.css"
const Hamburguer = ({barExpanded, setBarExpanded}) => {
  const handleInput = flag => {
    setBarExpanded(flag)
  }

  const HamburguerHTML = (
    <label htmlFor="burger" className={style.burger}>
      <input id="burger" type="checkbox" onChange={() => {handleInput(!barExpanded)}}/>
      <span></span>
      <span></span>
      <span></span>
    </label>
  )

  return HamburguerHTML
}

export default Hamburguer