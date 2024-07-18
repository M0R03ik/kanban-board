import { useState } from 'react'
import style from './DropDown.module.css'

export const DropDown = ({ title, tasks, onClick }) => {
  const [taskName, setTaskName] = useState('Select task')
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  return (
    <div className={style.wrap}>
      <div className={style.control} onClick={() => setIsOpenMenu(!isOpenMenu)}>
        {taskName}
      </div>
      {isOpenMenu ? (
        <div className={style.menu}>
          <ul className={style.list}>
            {tasks.map(task => {
              return (
                <li
                  key={task.id}
                  className={style.item}
                  onClick={() => onClick(title, task.id)}
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
