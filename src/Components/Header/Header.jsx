import avatar from '../../assets/images/user-avatar.svg'
import arrow from '../../assets/icons/arrow.svg'
import style from './style.module.css'

export const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>Awesome Kanban Board</h1>
      <div className={style.userMenu}>
        <div className={style.avatar}>
          <img src={avatar} alt='Аватар' />
        </div>
        <button className={style.menuButton}>
          <img src={arrow} alt='' width={12} height={8} />
        </button>
      </div>
    </header>
  )
}
