import { TaskItemList } from '../TaskItem/TaskItemList'
import style from './Content.module.css'

export const Content = ({ tasks, setTasks }) => {
  return (
    <>
      <main className={style.content}>
        <TaskItemList tasks={tasks} setTasks={setTasks} />
      </main>
    </>
  )
}
