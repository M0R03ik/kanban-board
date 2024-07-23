import style from './TaskItem.module.css'
import { LIST_TYPES } from '../../config'
import { Button } from '../Button/Button'
import { DropDown } from '../DropDown/DropDown'
import { useState } from 'react'
import { Form } from '../Form/Form'

export const TaskItem = ({
  title,
  tasks,
  type,
  setTasks,
  isSubmit,
  setIsSubmit,
  // isSelect,
  // setIsSelect,
  createNewTask,
  // getNewTask,
  // newTask,
  // setNewTask,
  // data,
}) => {
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
      {isSubmit && type === LIST_TYPES.BACKLOG && (
        <Form createNewTask={createNewTask} />
      )}
      {!isSubmit && type === LIST_TYPES.BACKLOG ? (
        <Button onClick={() => setIsSubmit(true)} key={title}>
          Add
        </Button>
      ) : null}

      {type !== LIST_TYPES.BACKLOG && <Button>Add</Button>}

      {/* 

      {isSelect && title === 'Ready' && (
        <DropDown {...data[0]} onClick={getNewTask} />
      )}

      {title === 'Ready' && (
        <Button
          disabled={!data[0].tasks.length}
          key={title}
          onClick={() => setIsSelect(true)}
        >
          Add
        </Button>
      )}

      {isSelect && title === 'In Progress' && (
        <DropDown {...data[1]} onClick={getNewTask} />
      )}

      {title === 'In Progress' && (
        <Button
          disabled={!data[1].tasks.length}
          key={title}
          onClick={() => setIsSelect(true)}
        >
          Add
        </Button>
      )}

      {isSelect && title === 'Finished' && (
        <DropDown {...data[2]} onClick={getNewTask} />
      )}

      {title === 'Finished' && (
        <Button
          disabled={!data[2].tasks.length}
          key={title}
          onClick={() => setIsSelect(true)}
        >
          Add
        </Button>
      )}

       */}
    </div>
  )
}
