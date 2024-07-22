import style from './TaskItem.module.css'
import { TaskItem } from './TaskItem'
import { dataMock } from '../../data'
import { useState } from 'react'

export const TaskItemList = () => {
  const [isSubmit, setIsSubmit] = useState(false)
  const [isSelect, setIsSelect] = useState(false)
  const [newTask, setNewTask] = useState('')
  const [data, setData] = useState(dataMock)

  const getId = () => {
    return Date.now().toString().slice(-5)
  }
  const createNewTask = () => {
    if (!newTask) return null

    const newData = {
      id: getId(),
      name: newTask,
      description: 'This task has no description',
    }

    setData(v => {
      const newArr = v
      newArr[0].tasks.push(newData)
      return newArr
    })

    setNewTask('')
    setIsSubmit(false)
  }

  const getNewTask = (title, id) => {
    if (title === 'Backlog') {
      const task = data[0].tasks.find(task => task.id === id)
      const taskIndex = data[0].tasks.findIndex(task => task.id === id)

      setData(v => {
        const newArr = v
        newArr[1].tasks.push(task)
        newArr[0].tasks.splice(taskIndex, 1)
        return newArr
      })
    }

    if (title === 'Ready') {
      const task = data[1].tasks.find(task => task.id === id)
      const taskIndex = data[1].tasks.findIndex(task => task.id === id)

      setData(v => {
        const newArr = v
        newArr[2].tasks.push(task)
        newArr[1].tasks.splice(taskIndex, 1)
        return newArr
      })
    }

    if (title === 'In Progress') {
      const task = data[2].tasks.find(task => task.id === id)
      const taskIndex = data[2].tasks.findIndex(task => task.id === id)
      setData(v => {
        const newArr = v
        newArr[3].tasks.push(task)
        newArr[2].tasks.splice(taskIndex, 1)
        return newArr
      })
    }

    setIsSelect(false)
  }

  return (
    <div className={style.tasks}>
      {dataMock.map(block => {
        return (
          <TaskItem
            title={block.title}
            tasks={block.tasks}
            key={block.title}
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
            isSelect={isSelect}
            setIsSelect={setIsSelect}
            createNewTask={createNewTask}
            getNewTask={getNewTask}
            setNewTask={setNewTask}
            newTask={newTask}
            data={data}
          />
        )
      })}
    </div>
  )
}
