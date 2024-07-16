import style from './TaskItem.module.css'
import { Button } from '../Button/Button'
import { useState } from 'react'

export const TaskItem = ({ title, tasks }) => {
  const [isSubmit, setIsSubmit] = useState(false)
  const [newTask, setNewTask] = useState(null)

  const addNewTask = e => {
    console.log(e)
    setIsSubmit(!isSubmit)
  }
  const sendNewTask = () => {
    if (!newTask) return null

    console.log(`Задача ${newTask}, добавлена в список`)

    setNewTask(null)
    setIsSubmit(false)
  }

  return (
    <div className={style.task}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.list}>
        {tasks.map(task => {
          return (
            <li className={style.item} key={task.id}>
              {task.name}
            </li>
          )
        })}
      </ul>
      {isSubmit && (
        <input
          type='text'
          onChange={e => setNewTask(e.target.value)}
          value={newTask}
          className={style.newTask}
        ></input>
      )}

      {isSubmit && title === 'Backlog' ? (
        <Button
          onClick={sendNewTask}
          isSubmit={isSubmit}
          disabled={!tasks.length}
          key={title}
        >
          Submit
        </Button>
      ) : (
        <Button
          onClick={e => addNewTask(e)}
          disabled={!tasks.length}
          key={title}
        >
          Add
        </Button>
      )}
    </div>
  )
}
