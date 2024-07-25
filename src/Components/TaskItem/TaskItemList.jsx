import style from './TaskItem.module.css'
import { LIST_TYPES, LIST_COPY } from '../../config'
import { TaskItem } from './TaskItem'
import { useState } from 'react'
import { getId } from '../../utils'

export const TaskItemList = ({ tasks, setTasks }) => {
  const [isSubmit, setIsSubmit] = useState(false)

  const createNewTask = newTask => {
    if (!newTask) return null

    const newData = {
      id: getId(),
      name: newTask,
      description: '',
      status: 'backlog',
    }

    setTasks(v => [...v, newData])
    setIsSubmit(false)
  }

  return (
    <div className={style.tasks}>
      {Object.values(LIST_TYPES).map(type => {
        const listTasks = tasks.filter(task => task.status === type)

        return (
          <TaskItem
            title={LIST_COPY[type]}
            tasks={tasks}
            setTasks={setTasks}
            listTasks={listTasks}
            type={type}
            key={type}
            createNewTask={createNewTask}
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
          />
        )
      })}
    </div>
  )
}
