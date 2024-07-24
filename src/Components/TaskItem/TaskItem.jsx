import style from './TaskItem.module.css'
import { LIST_TYPES } from '../../config'
import { Button } from '../Button/Button'
import { DropDown } from '../DropDown/DropDown'
import { useState } from 'react'
import { Form } from '../Form/Form'
import { Link } from 'react-router-dom'

export const TaskItem = ({
  title,
  tasks,
  setTasks,
  listTasks,
  type,
  isSubmit,
  setIsSubmit,
  createNewTask,
}) => {
  const [isSelect, setIsSelect] = useState(false)

  const getNewTask = (type, id) => {
    const updatedTask = tasks.find(task => task.id === id)
    const updatedTaskIndex = tasks.findIndex(task => task.id === id)
    updatedTask.status = type

    setTasks(arr => {
      arr.splice(updatedTaskIndex, 1)
      return [...arr, updatedTask]
    })

    setIsSelect(false)
  }

  return (
    <div className={style.task}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.list}>
        {listTasks.map(task => {
          return (
            <Link
              to={`/tasks/${task.id}`}
              className={style.taskLink}
              key={task.id}
            >
              <li className={style.item} key={task.id}>
                {task.name}
              </li>
            </Link>
          )
        })}
      </ul>

      {isSubmit && type === LIST_TYPES.BACKLOG && (
        <Form createNewTask={createNewTask} />
      )}
      {!isSubmit && type === LIST_TYPES.BACKLOG ? (
        <Button onClick={() => setIsSubmit(true)} key={title}>
          Add
        </Button>
      ) : null}

      {isSelect && type === LIST_TYPES.READY && (
        <DropDown
          tasksList={tasks.filter(task => task.status === LIST_TYPES.BACKLOG)}
          type={type}
          onClick={getNewTask}
        />
      )}
      {type === LIST_TYPES.READY && (
        <Button
          disabled={
            !tasks.filter(task => task.status === LIST_TYPES.BACKLOG).length
          }
          onClick={() => setIsSelect(!isSelect)}
        >
          {isSelect ? 'Cancel' : 'Add'}
        </Button>
      )}

      {isSelect && type === LIST_TYPES.IN_PROGRESS && (
        <DropDown
          tasksList={tasks.filter(task => task.status === LIST_TYPES.READY)}
          type={type}
          onClick={getNewTask}
        />
      )}
      {type === LIST_TYPES.IN_PROGRESS && (
        <Button
          disabled={
            !tasks.filter(task => task.status === LIST_TYPES.READY).length
          }
          onClick={() => setIsSelect(!isSelect)}
        >
          {isSelect ? 'Cancel' : 'Add'}
        </Button>
      )}

      {isSelect && type === LIST_TYPES.FINISHED && (
        <DropDown
          tasksList={tasks.filter(
            task => task.status === LIST_TYPES.IN_PROGRESS
          )}
          type={type}
          onClick={getNewTask}
        />
      )}
      {type === LIST_TYPES.FINISHED && (
        <Button
          disabled={
            !tasks.filter(task => task.status === LIST_TYPES.IN_PROGRESS).length
          }
          onClick={() => setIsSelect(!isSelect)}
        >
          {isSelect ? 'Cancel' : 'Add'}
        </Button>
      )}
    </div>
  )
}
