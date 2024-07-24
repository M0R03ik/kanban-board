import style from './Footer.module.css'
import { LIST_TYPES } from '../../config'

export const Footer = ({ tasks }) => {
  const activeTasks = tasks.filter(task => task.status === LIST_TYPES.BACKLOG)
  const finishedTasks = tasks.filter(
    task => task.status === LIST_TYPES.FINISHED
  )
  return (
    <footer className={style.footer}>
      <div className={style.tasks}>
        <p className={style.task}>
          Active tasks: <span className='active'>{activeTasks.length}</span>
        </p>
        <p className={style.task}>
          Finished tasks: <span className='active'>{finishedTasks.length}</span>
        </p>
      </div>
      <div className='copyRight'>
        Kanban board by{' '}
        <a
          className={style.link}
          href='https://github.com/M0R03ik'
          target='blanc'
        >
          Mikhail
        </a>{' '}
        &lt;2024&gt;
      </div>
    </footer>
  )
}
