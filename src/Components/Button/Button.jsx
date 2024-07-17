import style from './button.module.css'

export const Button = ({ isSubmit, disabled = false, children, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={isSubmit ? `${style.button} ${style.submit}` : style.button}
    >
      {children}
    </button>
  )
}
