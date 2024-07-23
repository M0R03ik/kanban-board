import style from './TaskItem.module.css'
import { LIST_TYPES, LIST_COPY } from '../../config'
import { TaskItem } from './TaskItem'
import { useState } from 'react'
import { getId } from '../../utils'

export const TaskItemList = ({ tasks, setTasks }) => {
  const [isSelect, setIsSelect] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)

  const createNewTask = newTask => {
    if (!newTask) return null

    const newData = {
      id: getId(),
      name: newTask,
      description: 'This task has no description',
      status: 'backlog',
    }

    setTasks(v => [...v, newData])
    setIsSubmit(false)
  }

  // const getNewTask = (title, id) => {
  //   if (title === 'Backlog') {
  //     const task = data[0].tasks.find(task => task.id === id)
  //     const taskIndex = data[0].tasks.findIndex(task => task.id === id)

  //     setData(v => {
  //       const newArr = v
  //       newArr[1].tasks.push(task)
  //       newArr[0].tasks.splice(taskIndex, 1)
  //       return newArr
  //     })
  //   }

  //   if (title === 'Ready') {
  //     const task = data[1].tasks.find(task => task.id === id)
  //     const taskIndex = data[1].tasks.findIndex(task => task.id === id)

  //     setData(v => {
  //       const newArr = v
  //       newArr[2].tasks.push(task)
  //       newArr[1].tasks.splice(taskIndex, 1)
  //       return newArr
  //     })
  //   }

  //   if (title === 'In Progress') {
  //     const task = data[2].tasks.find(task => task.id === id)
  //     const taskIndex = data[2].tasks.findIndex(task => task.id === id)
  //     setData(v => {
  //       const newArr = v
  //       newArr[3].tasks.push(task)
  //       newArr[2].tasks.splice(taskIndex, 1)
  //       return newArr
  //     })
  //   }

  //   setIsSelect(false)
  // }
  return (
    <div className={style.tasks}>
      {Object.values(LIST_TYPES).map(type => {
        const listTasks = tasks.filter(task => task.status === type)

        return (
          <TaskItem
            title={LIST_COPY[type]}
            tasks={listTasks}
            type={type}
            key={type}
            createNewTask={createNewTask}
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
            // isSelect={isSelect}
            // setIsSelect={setIsSelect}
            // createNewTask={createNewTask}
            // getNewTask={getNewTask}
            // data={data}
          />
        )
      })}
    </div>
  )
}
