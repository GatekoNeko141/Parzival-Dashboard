import style from "../assets/css/components/SwitchTheme.module.css"
const SwitchTheme = () => {
  const SwitchThemeHTML = (
    <label className={style.switch}>
      <input type="checkbox"/>
      <span className={style.slider}></span>
    </label>
  )

  return SwitchThemeHTML
}

export default SwitchTheme