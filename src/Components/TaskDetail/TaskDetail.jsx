import { Link, useParams } from 'react-router-dom'
import style from './TaskDetail.module.css'
import { useState } from 'react'
import { Button } from '../Button/Button'

export const TaskDetail = ({ tasks, setTasks }) => {
  const [isEdit, setIsEdit] = useState(false)

  const { taskId } = useParams()
  const task = tasks.find(task => task.id === taskId)
  const [taskDescription, setTaskDescription] = useState(task.description)

  const handleSubmit = e => {
    e.preventDefault()

    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, description: taskDescription }
      }
      return task
    })

    setTasks(updatedTasks)
    setIsEdit(false)
  }

  return (
    <div className={style.taskDetail}>
      {task ? (
        <>
          <h2 className={style.title}>{task.name}</h2>
          <p className={style.description}>
            {task.description || 'This task has no description'}
          </p>

          {isEdit ? (
            <form className={style.editForm} onSubmit={handleSubmit}>
              <textarea
                id='description'
                name='description'
                onChange={e => setTaskDescription(e.target.value)}
                value={taskDescription}
                className={style.editDescription}
                placeholder='Describe the task'
                autoFocus
              ></textarea>
              <Button isSubmit={true} type='submit'>
                Save
              </Button>
            </form>
          ) : (
            <Button onClick={() => setIsEdit(true)} isSubmit={true}>
              Edit
            </Button>
          )}
        </>
      ) : (
        <h2>Task with ID {taskId} not found</h2>
      )}
      <Link to={'/'}>
        <button className={style.closeButton}></button>
      </Link>
    </div>
  )
}
