import avatar from '../../assets/images/user-avatar.svg'
import arrow from '../../assets/icons/arrow.svg'
import style from './style.module.css'
import { useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={style.header}>
      <h1 className={style.title}>Awesome Kanban Board</h1>
      <div className={style.userMenu} onClick={handleClick}>
        <div className={style.avatar}>
          <img src={avatar} alt='Аватар' />
        </div>
        <div
          className={
            isOpen
              ? `${style.menuButton} ${style.rotate}`
              : `${style.menuButton}`
          }
        >
          <img src={arrow} alt='' width={12} height={8} />
        </div>
        {isOpen && (
          <nav className={style.menu}>
            <ul className={style.menuList}>
              <li className={style.menuItem}>Profile</li>
              <li className={style.menuItem}>Log Out</li>
            </ul>
            <div className={style.triangle}></div>
          </nav>
        )}
      </div>
    </header>
  )
}
