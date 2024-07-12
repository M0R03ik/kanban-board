import style from './button.module.css'
import plus from '../../assets/icons/plus.svg'

export const Button = ({ isSubmit, disabled = false }) => {
  return isSubmit ? (
    <button disabled={disabled} className={`${style.button} ${style.submit}`}>
      Submit
    </button>
  ) : (
    <button disabled={disabled} className={style.button}>
      <img src={plus} alt='' width={14} height={14} />
      Add card
    </button>
  )
}
