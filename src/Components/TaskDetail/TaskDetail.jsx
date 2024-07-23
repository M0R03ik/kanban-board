import { Link, useParams } from 'react-router-dom'
import style from './TaskDetail.module.css'

export const TaskDetail = ({ tasks, setTasks }) => {
  const { taskId } = useParams()
  const task = tasks.find(task => task.id === taskId)

  return (
    <div className={style.taskDetail}>
      {task ? (
        <>
          <h2 className={style.title}>{task.name}</h2>
          <p className={style.description}>{task.description}</p>
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
