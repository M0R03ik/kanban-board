import { useState } from 'react'
import style from './DropDown.module.css'

export const DropDown = ({ tasksList, type, onClick }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <div className={style.wrap}>
      <div className={style.control} onClick={() => setIsOpenMenu(!isOpenMenu)}>
        {'Select task'}
      </div>
      {isOpenMenu ? (
        <div className={style.menu}>
          <ul className={style.list}>
            {tasksList.map(task => {
              return (
                <li
                  key={task.id}
                  className={style.item}
                  onClick={() => onClick(type, task.id)}
                >
                  {task.name}
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
