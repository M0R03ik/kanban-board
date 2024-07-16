import style from './TaskItem.module.css'
import { Button } from '../Button/Button'
import { useState } from 'react'
import { dataMock } from '../../data'

export const TaskItem = ({ title, tasks }) => {
  const [isSubmit, setIsSubmit] = useState(false)
  const [newTask, setNewTask] = useState('')

  const sendNewTask = () => {
    if (!newTask) return null

    console.log(`Задача ${newTask}, добавлена в список`)

    setNewTask('')
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

      {title === 'Ready' && (
        <Button disabled={!dataMock[0].tasks.length} key={title}>
          Add
        </Button>
      )}
      {title === 'In Progress' && (
        <Button disabled={!dataMock[1].tasks.length} key={title}>
          Add
        </Button>
      )}
      {title === 'Finished' && (
        <Button disabled={!dataMock[2].tasks.length} key={title}>
          Add
        </Button>
      )}

      {isSubmit && title === 'Backlog' ? (
        <Button
          onClick={sendNewTask}
          isSubmit={isSubmit}
          disabled={!newTask.length}
          key={title}
        >
          Submit
        </Button>
      ) : (
        title === 'Backlog' && (
          <Button onClick={() => setIsSubmit(true)} key={title}>
            Add
          </Button>
        )
      )}
    </div>
  )
}
